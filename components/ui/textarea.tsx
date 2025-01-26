import React from 'react';

interface TextareaProps {
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  className?:string
}

const Textarea: React.FC<TextareaProps> = ({ id, value, onChange, required , className}) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full p-2 border rounded-md ${className}`}
    />
  );
};

export { Textarea };