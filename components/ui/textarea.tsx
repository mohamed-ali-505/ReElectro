import React from 'react';

interface TextareaProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ id, value, onChange, required }) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2 border rounded-md"
    />
  );
};

export { Textarea };