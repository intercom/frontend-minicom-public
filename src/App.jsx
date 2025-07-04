function App() {
  const isFancyMode = () => {
    return localStorage.getItem('congratsFancyMode') === 'true';
  };

  const fancy = isFancyMode();

  return (
    <div className="app-container" data-theme={fancy ? 'fancy' : 'normal'}>

      {/* Logo */}
      <div className="logo-container">
        <div className="logo-wrapper">
          <img
            src="/Intercom_Squinge_Black.svg"
            alt="Intercom Logo"
            className="logo-image"
          />
        </div>
      </div>

      {/* Main content card */}
      <div className="main-card">

        {/* Main heading */}
        <h1 className="main-title">
          <span>Congratulations!</span>
          <span className="emoji ml-2">🎉</span>
        </h1>

        {/* Subtitle */}
        <p className="subtitle">
          You are all set for your interview
        </p>

        {/* Best of luck */}
        <p className="luck-text">
          Best of luck!
        </p>

      </div>

      {/* Background effects - controlled by CSS */}
      <div className="background-effects absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-ping"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-spin animation-delay-3000"></div>

        <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-yellow-200 rounded-full animate-float-delayed opacity-70"></div>
        <div className="absolute bottom-32 left-16 w-5 h-5 bg-pink-200 rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-200 rounded-full animate-float opacity-80"></div>

        <div className="absolute top-1/3 left-1/2 text-yellow-300 text-4xl">✨</div>

        <div className="absolute top-0 left-[2%] w-3 h-3 bg-red-400 rounded-full animate-confetti-fall"></div>
        <div className="absolute top-0 left-[8%] w-4 h-2 bg-green-400 animate-confetti-fall animation-delay-200"></div>
        <div className="absolute top-0 left-[14%] w-2 h-3 bg-purple-400 animate-confetti-fall animation-delay-400"></div>
        <div className="absolute top-0 left-[20%] w-3 h-2 bg-orange-400 animate-confetti-fall animation-delay-600"></div>
        <div className="absolute top-0 left-[26%] w-2 h-4 bg-indigo-400 animate-confetti-fall animation-delay-800"></div>
        <div className="absolute top-0 left-[32%] w-4 h-3 bg-blue-500 animate-confetti-fall animation-delay-1000"></div>
        <div className="absolute top-0 left-[38%] w-3 h-3 bg-yellow-500 rounded-full animate-confetti-fall animation-delay-1200"></div>
        <div className="absolute top-0 left-[44%] w-2 h-2 bg-pink-500 animate-confetti-fall animation-delay-1400"></div>
        <div className="absolute top-0 left-[50%] w-4 h-2 bg-teal-500 animate-confetti-fall animation-delay-1600"></div>
        <div className="absolute top-0 left-[56%] w-3 h-4 bg-red-600 animate-confetti-fall animation-delay-1800"></div>
        <div className="absolute top-0 left-[62%] w-2 h-3 bg-lime-400 animate-confetti-fall animation-delay-2000"></div>
        <div className="absolute top-0 left-[68%] w-3 h-2 bg-cyan-400 animate-confetti-fall animation-delay-2200"></div>
        <div className="absolute top-0 left-[74%] w-4 h-4 bg-rose-400 rounded-full animate-confetti-fall animation-delay-2400"></div>
        <div className="absolute top-0 left-[80%] w-2 h-3 bg-amber-400 animate-confetti-fall animation-delay-2600"></div>
        <div className="absolute top-0 left-[86%] w-3 h-2 bg-violet-400 animate-confetti-fall animation-delay-2800"></div>
        <div className="absolute top-0 left-[92%] w-4 h-3 bg-emerald-400 animate-confetti-fall animation-delay-3000"></div>
        <div className="absolute top-0 left-[98%] w-2 h-2 bg-fuchsia-400 animate-confetti-fall animation-delay-100"></div>

        <div className="absolute top-0 left-[5%] w-2 h-4 bg-red-300 animate-confetti-fall-slow animation-delay-300"></div>
        <div className="absolute top-0 left-[11%] w-3 h-2 bg-green-300 animate-confetti-fall-slow animation-delay-700"></div>
        <div className="absolute top-0 left-[17%] w-4 h-3 bg-purple-300 animate-confetti-fall-slow animation-delay-1100"></div>
        <div className="absolute top-0 left-[23%] w-2 h-2 bg-orange-300 rounded-full animate-confetti-fall-slow animation-delay-1500"></div>
        <div className="absolute top-0 left-[29%] w-3 h-4 bg-indigo-300 animate-confetti-fall-slow animation-delay-1900"></div>
        <div className="absolute top-0 left-[35%] w-4 h-2 bg-blue-300 animate-confetti-fall-slow animation-delay-2300"></div>
        <div className="absolute top-0 left-[41%] w-2 h-3 bg-yellow-300 animate-confetti-fall-slow animation-delay-2700"></div>
        <div className="absolute top-0 left-[47%] w-3 h-3 bg-pink-300 rounded-full animate-confetti-fall-slow animation-delay-500"></div>
        <div className="absolute top-0 left-[53%] w-4 h-4 bg-teal-300 animate-confetti-fall-slow animation-delay-900"></div>
        <div className="absolute top-0 left-[59%] w-2 h-2 bg-red-500 animate-confetti-fall-slow animation-delay-1300"></div>
        <div className="absolute top-0 left-[65%] w-3 h-2 bg-lime-300 animate-confetti-fall-slow animation-delay-1700"></div>
        <div className="absolute top-0 left-[71%] w-2 h-4 bg-cyan-300 animate-confetti-fall-slow animation-delay-2100"></div>
        <div className="absolute top-0 left-[77%] w-4 h-3 bg-rose-300 animate-confetti-fall-slow animation-delay-2500"></div>
        <div className="absolute top-0 left-[83%] w-3 h-2 bg-amber-300 animate-confetti-fall-slow animation-delay-2900"></div>
        <div className="absolute top-0 left-[89%] w-2 h-3 bg-violet-300 animate-confetti-fall-slow animation-delay-150"></div>
        <div className="absolute top-0 left-[95%] w-4 h-2 bg-emerald-300 animate-confetti-fall-slow animation-delay-550"></div>

        <div className="absolute top-0 left-[3%] w-3 h-2 bg-red-500 animate-confetti-fall-fast animation-delay-250"></div>
        <div className="absolute top-0 left-[9%] w-2 h-3 bg-green-500 animate-confetti-fall-fast animation-delay-450"></div>
        <div className="absolute top-0 left-[15%] w-4 h-2 bg-purple-500 animate-confetti-fall-fast animation-delay-650"></div>
        <div className="absolute top-0 left-[21%] w-3 h-4 bg-orange-500 animate-confetti-fall-fast animation-delay-850"></div>
        <div className="absolute top-0 left-[27%] w-2 h-2 bg-indigo-500 rounded-full animate-confetti-fall-fast animation-delay-1050"></div>
        <div className="absolute top-0 left-[33%] w-4 h-3 bg-blue-600 animate-confetti-fall-fast animation-delay-1250"></div>
        <div className="absolute top-0 left-[39%] w-3 h-2 bg-yellow-600 animate-confetti-fall-fast animation-delay-1450"></div>
        <div className="absolute top-0 left-[45%] w-2 h-4 bg-pink-600 animate-confetti-fall-fast animation-delay-1650"></div>
        <div className="absolute top-0 left-[51%] w-4 h-4 bg-teal-600 rounded-full animate-confetti-fall-fast animation-delay-1850"></div>
        <div className="absolute top-0 left-[57%] w-3 h-3 bg-red-700 animate-confetti-fall-fast animation-delay-2050"></div>
        <div className="absolute top-0 left-[63%] w-2 h-2 bg-lime-500 animate-confetti-fall-fast animation-delay-2250"></div>
        <div className="absolute top-0 left-[69%] w-4 h-2 bg-cyan-500 animate-confetti-fall-fast animation-delay-2450"></div>
        <div className="absolute top-0 left-[75%] w-3 h-4 bg-rose-500 animate-confetti-fall-fast animation-delay-2650"></div>
        <div className="absolute top-0 left-[81%] w-2 h-3 bg-amber-500 animate-confetti-fall-fast animation-delay-2850"></div>
        <div className="absolute top-0 left-[87%] w-4 h-2 bg-violet-500 animate-confetti-fall-fast animation-delay-50"></div>
        <div className="absolute top-0 left-[93%] w-3 h-3 bg-emerald-500 rounded-full animate-confetti-fall-fast animation-delay-350"></div>
        <div className="absolute top-0 left-[99%] w-2 h-4 bg-fuchsia-500 animate-confetti-fall-fast animation-delay-750"></div>
      </div>
    </div>
  )
}

export default App
