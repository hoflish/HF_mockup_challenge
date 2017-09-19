import React from 'react';
import './form-field.css';

export default function FormField({children}) {
  return (
    <div className='uiForm-field'>
      {children}
    </div>
  );
}
