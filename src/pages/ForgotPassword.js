import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [timer, setTimer] = useState(300); 
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();    
    console.log('Submit email:', email);
  };
  
  React.useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className=" p-8 rounded-lg  max-w-md w-full relative">
        {/* Back Arrow */}
        <div className="flex items-center mb-4 relative">
        <i class="fa-solid fa-arrow-left absolute left-[-40px] cursor-pointer" onClick={() => navigate('/')} ></i>
          <h1 className="text-lg font-semibold">Forgot Password?</h1>
        </div>

        <p className="text-gray-600 mb-6">
          Enter your email, and we’ll send you instructions on how to reset your password
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-teal-500"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Submit
          </button>
        </form>

        {/* Timer and Resend Link */}
        <div className="mt-4 text-center">
          <p>
            Resend Link in <span className="text-red-500 font-semibold">{formatTime(timer)}</span>
          </p>
          <p className="mt-2">
            Haven’t received an email?{' '}
            <span className="text-teal-600 font-semibold cursor-pointer">Resend email</span>
          </p>
        </div>
      </div>
      <div className="w-[50%] h-[100%] border-[100px] border-gray-100 rounded-full absolute top-[-60%] -z-10"></div>
      <div className="w-[500px] h-[500px] border-[50px] border-gray-100 rounded-full absolute right-[0px] bottom-[0px] transform translate-x-1/2 translate-y-1/2 -z-10"></div>
    
    </div>
  );
}

export default ForgotPassword;
