import React from 'react'

const Footer = () => {
  return (
    <div className="bg-slate-900 h-32 text-gray-400">
      <p className="text-center p-10">
        ©{new Date().getFullYear()} Netflix, Inc.
      </p>
    </div>
  );
}

export default Footer