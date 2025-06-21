'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Form errors
  const [errors, setErrors] = useState<FormErrors>({});

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>({
    type: null,
    message: null,
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors({
        ...errors,
        [id]: undefined
      });
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    try {
      // In a real application, you would send this data to your backend or a form service
      // For this demo, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Show success message
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: null });
      }, 5000);
    } catch (err) {
      // Show error message
      setSubmitStatus({
        type: 'error',
        message: 'There was a problem sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form 
        className="bg-white rounded-lg shadow-md p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h2>

        {/* Status message */}
        {submitStatus.message && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-md ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}

        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            className={`w-full px-4 py-3 rounded-md border ${
              errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary/50`}
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className={`w-full px-4 py-3 rounded-md border ${
              errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary/50`}
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="How can I help you?"
            value={formData.subject}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            className={`w-full px-4 py-3 rounded-md border ${
              errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary/50 h-36`}
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={`w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            isSubmitting 
              ? 'opacity-70 cursor-not-allowed' 
              : 'hover:shadow-lg'
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </div>
          ) : 'Send Message'}
        </button>
        
        <p className="mt-4 text-gray-500 text-sm text-center">
          <span className="text-red-500">*</span> Required fields
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm;
