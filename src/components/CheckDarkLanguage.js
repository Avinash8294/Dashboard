import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../redux/languageSlice';
function CheckDarkLanguage() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('en');
const dispatch=useDispatch();
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLanguageChange = (value) => {
    const selectedLanguage = value;
    setLang(value)
    // console.log(value)
    dispatch(setLanguage(selectedLanguage));
  }
  return (
    <div className="flex absolute bottom-5 right-5 items-center justify-center z-50" >
      <div className="w-80 h-60 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold dark:text-white">Language Selector</h2>
          <label className="flex items-center cursor-pointer">
            <div className="mr-2 text-gray-600 dark:text-gray-300">Light</div>
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                  darkMode ? 'transform translate-x-4' : ''
                }`}
              ></div>
            </div>
            <div className="ml-2 text-gray-600 dark:text-gray-300">Dark</div>
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="language" className="block text-gray-600 dark:text-gray-300 mb-2">
            Choose Language
          </label>
          <select
            id="language"
            className="w-full px-3 py-2 border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 dark:text-white rounded-lg"
            value={lang}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">Hindi</option>
          </select>
        </div>

        <div className="text-gray-700 dark:text-gray-200">
        Selected Language: <span className="font-bold">{lang === 'en' ? 'English' : 'Hindi'}</span>
        </div>
      </div>
    </div>
  );
}

export default CheckDarkLanguage;
