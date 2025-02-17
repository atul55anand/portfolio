"use client";

import {useState, useEffect, use} from 'react';

export function ThemeToggle(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') setIsDarkMode(true);
}, []);

useEffect(() => {
    if (isDarkMode) {
        document.body.classList.add('bg-gray-900');
        document.body.classList.remove('bg-sky-500');
        localStorage.setItem('theme', 'dark');
    }else{
        document.body.classList.add('bg-sky-500');
        document.body.classList.remove('bg-gray-900');
        localStorage.setItem('theme', 'light');
    }
}, [isDarkMode]);

    return (
        <button 
        onClick={() => setIsDarkMode(!isDarkMode)} 
        className="absolute top-4 right-4 z-50 p-2 bg-white text-black rounded"
        >
            {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
    );
}
