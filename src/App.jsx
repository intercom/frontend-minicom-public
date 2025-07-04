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

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-yellow-200 rounded-full animate-float-delayed opacity-70"></div>
        <div className="absolute bottom-32 left-16 w-5 h-5 bg-pink-200 rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-200 rounded-full animate-float opacity-80"></div>

        {/* Sparkle effects */}
        <div className="absolute top-1/3 left-1/2 text-yellow-300 text-4xl animate-explode">✨</div>
        <div className="absolute top-1/2 left-1/4 text-pink-300 text-5xl animate-mega-bounce animation-delay-1000">⭐</div>
        <div className="absolute bottom-1/3 right-1/3 text-blue-300 text-6xl animate-fireworks animation-delay-2000">💫</div>
        <div className="absolute top-1/4 right-1/4 text-purple-300 text-4xl animate-explode animation-delay-3000">🌟</div>

        {/* CHAOS EMOJIS */}
        <div className="absolute top-10 left-10 text-red-400 text-8xl animate-explode">💥</div>
        <div className="absolute top-20 right-20 text-orange-400 text-7xl animate-mega-bounce animation-delay-500">🔥</div>
        <div className="absolute bottom-20 left-20 text-purple-400 text-6xl animate-fireworks animation-delay-1000">⚡</div>
        <div className="absolute bottom-10 right-10 text-pink-400 text-9xl animate-explode animation-delay-1500">💫</div>
        <div className="absolute top-1/2 left-10 text-green-400 text-5xl animate-mega-bounce animation-delay-2000">🎆</div>
        <div className="absolute top-1/2 right-10 text-blue-400 text-7xl animate-fireworks animation-delay-2500">🎇</div>

        {/* Confetti explosion */}
        <div className="absolute top-0 left-[5%] w-3 h-3 bg-red-400 rounded-full animate-confetti-fall"></div>
        <div className="absolute top-0 left-[15%] w-4 h-2 bg-green-400 animate-confetti-fall animation-delay-400"></div>
        <div className="absolute top-0 left-[25%] w-2 h-3 bg-purple-400 animate-confetti-fall animation-delay-800"></div>
        <div className="absolute top-0 left-[35%] w-2 h-2 bg-orange-400 rounded-full animate-confetti-fall animation-delay-1200"></div>
        <div className="absolute top-0 left-[45%] w-3 h-4 bg-indigo-400 animate-confetti-fall animation-delay-1600"></div>
        <div className="absolute top-0 left-[55%] w-3 h-2 bg-blue-500 animate-confetti-fall animation-delay-2000"></div>
        <div className="absolute top-0 left-[65%] w-2 h-4 bg-yellow-500 animate-confetti-fall animation-delay-2400"></div>
        <div className="absolute top-0 left-[75%] w-4 h-2 bg-pink-500 animate-confetti-fall animation-delay-2800"></div>
        <div className="absolute top-0 left-[85%] w-3 h-4 bg-teal-500 animate-confetti-fall animation-delay-100"></div>
        <div className="absolute top-0 left-[95%] w-2 h-3 bg-red-600 animate-confetti-fall animation-delay-500"></div>
      </div>
    </div>
  )
}

export default App
