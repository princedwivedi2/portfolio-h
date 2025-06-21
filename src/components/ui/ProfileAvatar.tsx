'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfileAvatarProps {
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBackground?: boolean;
  style?: 'gradient' | 'solid' | 'glow';
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  imageUrl,
  size = 'lg',
  showBackground = true,
  style = 'gradient'
}) => {
  // Define size dimensions
  const dimensions = {
    sm: { width: 56, height: 56, textSize: 'text-xl', borderWidth: 'border-2' },
    md: { width: 110, height: 110, textSize: 'text-3xl', borderWidth: 'border-3' },
    lg: { width: 220, height: 220, textSize: 'text-5xl', borderWidth: 'border-4' },
    xl: { width: 320, height: 320, textSize: 'text-7xl', borderWidth: 'border-4' },
  };

  const styleClasses = {
    gradient: "bg-gradient-to-br from-primary to-secondary border-white",
    solid: "bg-primary border-white",
    glow: "bg-white border-primary/30"
  };

  const { width, height, textSize, borderWidth } = dimensions[size];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.19, 1, 0.22, 1],
        scale: { duration: 1.2 }
      }}
      whileHover={{ 
        scale: 1.03, 
        rotate: 2,
        transition: { duration: 0.4 } 
      }}
      className="relative mx-auto"
      style={{ width, height }}
    >
      {/* Decorative elements */}
      {showBackground && style === 'gradient' && (
        <>
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full opacity-60 blur-2xl" />
          <div className="absolute -inset-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-30 blur-3xl animate-pulse" />
        </>
      )}
      
      {showBackground && style === 'glow' && (
        <div className="absolute -inset-6 bg-primary rounded-full opacity-20 blur-2xl animate-pulse" />
      )}      <motion.div 
        className={`absolute inset-0 overflow-hidden rounded-full ${borderWidth} shadow-lg border-white`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Profile"
            fill
            sizes={`${Math.max(width, height)}px`}
            className="object-cover"
            priority
          />        ) : (
          <div className={`w-full h-full ${style === 'gradient' ? 'bg-gradient-to-br from-primary to-secondary' : style === 'solid' ? 'bg-primary' : 'bg-gradient-to-r from-softPurple to-softPink'} rounded-full overflow-hidden flex items-center justify-center`}>
            <span className={`${textSize} text-white font-bold tracking-wider`}>S</span>
          </div>
        )}
      </motion.div>

      {/* Decorative dots */}
      {size === 'lg' || size === 'xl' ? (
        <>
          <motion.div 
            className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-primary"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
          <motion.div 
            className="absolute -top-6 right-6 w-6 h-6 rounded-full bg-secondary"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />
        </>
      ) : null}
    </motion.div>
  );
};

export default ProfileAvatar;
