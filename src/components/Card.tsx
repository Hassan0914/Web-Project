import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  shadow?: 'soft' | 'medium' | 'hard' | 'none';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'soft',
  hover = false,
}) => {
  const baseClasses = 'bg-white rounded-xl border border-secondary-100 transition-all duration-200';
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const shadowClasses = {
    none: '',
    soft: 'shadow-soft',
    medium: 'shadow-medium',
    hard: 'shadow-hard',
  };
  
  const hoverClass = hover ? 'hover:shadow-medium hover:-translate-y-1' : '';
  
  return (
    <div className={`${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;