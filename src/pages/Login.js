import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from '../assets/images/logo.png';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import '../i18n/i18n'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const language = useSelector((state) => state.language.language);
  const { t, i18n } = useTranslation();
  console.log(i18n,t)
  // console.log(darkMode)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);  // Set i18n to use the selected language from Redux
    }
  }, [language, i18n]);
  const handleSignIn = (e) => {
    e.preventDefault();

    // Simple authentication check
    if (email === 'admin@gmail.com' && password === '12345678') {
      navigate('/dashboard'); // Redirect to the DashBoard component
    } else {
      alert('Incorrect email or password. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden relative dark:bg-gray-800">
      <div className="mt-0 text-center w-[80%] md:w-[420px]">
        <img src={logo} alt="Logo" className="mx-auto mb-6 w-14" />
        <h2 className="text-teal-600 text-2xl mb-4 text-heading1Normal font-regular "> {t('admin_portal')}</h2>
        <h3 className="text-lg text-gray-600 mb-8 font-regular text-subtitle1 dark:text-white "> {t('sign_in')}</h3>
       
        <form className="pt-12" onSubmit={handleSignIn}>
          <div className="mb-6 text-left">
            <label className="block text-sm text-gray-600 mb-2 dark:text-white font-regular">{t('email_label')}</label>
            <input
              type="email"
              placeholder={t('email_placeholder')}
              className="bg-gray-100 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6 text-left relative">
            <label className="block text-sm text-gray-600 mb-2 dark:text-white font-regular ">{t('password_label')}</label>
            <input
              type={showPassword ? "text" : "password"} 
              placeholder={t('password_placeholder')}
              className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 mt-7 text-gray-400 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#108699] text-white rounded-md hover:bg-teal-700 "
          >
            {t('sign_in_button')}
          </button>
        </form>
        <div className='mt-10 '> 
          <span className='dark:text-white font-regular'> {t('forgot_password')}</span> 
          <span className='text-primary cursor-pointer' onClick={() => navigate('/forget_password')}> {t('click_here')}</span>
        </div>
      </div>

      <div className="w-[50%] h-[100%] border-[100px] border-gray-100 rounded-full absolute top-[-60%] -z-10 dark:z-0 dark:opacity-10"></div>
      <div className="w-[500px] h-[500px] border-[50px] border-gray-100 rounded-full absolute dark:z-0 dark:opacity-10 right-[0px] bottom-[0px] transform translate-x-1/2 translate-y-1/2 -z-10"></div>
    </div>
  );
};

export default Login;
