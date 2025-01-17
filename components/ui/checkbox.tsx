import React from 'react';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onCheckedChange }) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="border rounded"
    />
  );
};

export { Checkbox };