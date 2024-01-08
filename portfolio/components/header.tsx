import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <div>
      <h1 className='text-center text-6xl font-black bg-clip-text text-transparent bg-gradient animate-gradient'>
        {title}
      </h1>
      <h1 className='text-center text-3xl font-medium bg-clip-text text-transparent bg-gradient animate-gradient'>
        {subtitle}
      </h1>
    </div>
  );
}

export default Header;