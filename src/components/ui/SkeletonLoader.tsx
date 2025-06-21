'use client';

import React from 'react';

type SkeletonProps = {
  type: 'card' | 'text' | 'circle' | 'testimonial' | 'project' | 'skill';
  count?: number;
  className?: string;
};

const SkeletonLoader = ({ type, count = 1, className = '' }: SkeletonProps) => {
  const renderSkeleton = (index: number) => {
    switch (type) {
      case 'text':
        return (
          <div 
            key={index}
            className={`h-4 bg-gray-200 rounded animate-pulse ${className}`}
          />
        );
        
      case 'circle':
        return (          <div 
            key={index}
            className={`rounded-full bg-gray-200 animate-pulse ${className || 'w-16 h-16'}`}
          />
        );
        
      case 'card':
        return (          <div
            key={index}
            className={`bg-gray-100 rounded-lg overflow-hidden shadow-md animate-pulse h-56 ${className}`}
          >
            <div className="h-32 bg-gray-200" />
            <div className="p-4 space-y-3">
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 rounded" />
            </div>
          </div>
        );
        
      case 'project':
        return (
          <div
            key={index}
            className={`bg-white rounded-xl overflow-hidden shadow-card animate-pulse ${className}`}
          >
            <div className="p-6 space-y-4">
              <div className="h-6 w-3/4 bg-gray-200 rounded" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-5/6 bg-gray-200 rounded" />
                <div className="h-3 w-4/5 bg-gray-200 rounded" />
              </div>
              <div className="pt-4 flex items-center space-x-2">
                <div className="w-16 h-4 bg-gray-200 rounded" />
                <div className="w-1 h-4 bg-gray-200" /> 
                <div className="w-10 h-4 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        );
        
      case 'testimonial':
        return (          <div
            key={index}
            className={`bg-white rounded-xl overflow-hidden shadow-card animate-pulse h-72 ${className}`}
          >
            <div className="p-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-200" />
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-3 w-24 bg-gray-200 rounded" />
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-5/6 bg-gray-200 rounded" />
                <div className="h-3 w-11/12 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        );
        
      case 'skill':
        return (
          <div
            key={index}
            className={`space-y-2 animate-pulse ${className}`}
          >
            <div className="flex justify-between items-center">
              <div className="h-4 w-1/3 bg-gray-200 rounded" />
              <div className="h-4 w-16 bg-gray-200 rounded" />
            </div>
            <div className="h-2 w-full bg-gray-100 rounded">
              <div className="h-full w-3/4 bg-gray-200 rounded" />
            </div>
            <div className="h-3 w-5/6 bg-gray-200 rounded" />
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <>
      {Array.from({ length: count }, (_, i) => renderSkeleton(i))}
    </>
  );
};

export default SkeletonLoader;
