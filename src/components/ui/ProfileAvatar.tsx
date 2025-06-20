'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfileAvatarProps {
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBackground?: boolean;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  imageUrl,
  size = 'lg',
  showBackground = true,
}) => {
  // Define size dimensions
  const dimensions = {
    sm: { width: 48, height: 48, textSize: 'text-xl' },
    md: { width: 96, height: 96, textSize: 'text-3xl' },
    lg: { width: 200, height: 200, textSize: 'text-5xl' },
    xl: { width: 300, height: 300, textSize: 'text-7xl' },
  };

  const { width, height, textSize } = dimensions[size];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto"
      style={{ width, height }}
    >
      {/* Decorative background */}
      {showBackground && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-xl" />
      )}

      <div className="absolute inset-0 overflow-hidden rounded-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Profile"
            fill
            sizes={`${Math.max(width, height)}px`}
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/80 to-secondary/80 rounded-full overflow-hidden flex items-center justify-center">
            <span className={`${textSize} text-white font-bold`}>S</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProfileAvatar;
