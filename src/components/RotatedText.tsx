import React from 'react';

interface RotatedTextProps {
  text: string;
  rotation?: number;
  fontSize?: string;
  fontWeight?: string;
  className?: string;
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

const RotatedText: React.FC<RotatedTextProps> = ({ 
  text, 
  rotation = 0, 
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  className = '',
  position = {} 
}) => {
  const style = {
    transform: `rotate(${rotation}deg)`,
    transformOrigin: 'center',
    position: 'absolute' as const,
    ...position
  };

  return (
    <div 
      className={`${fontSize} ${fontWeight} ${className} whitespace-nowrap`}
      style={style}
    >
      {text}
    </div>
  );
};

export default RotatedText; 