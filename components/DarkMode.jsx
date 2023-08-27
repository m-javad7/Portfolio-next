'use client'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (!theme) {
      setTheme('dark');
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
      <button className='right-4 bottom-10 text-2xl fixed' onClick={e => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
  );
};

export default DarkModeButton;
