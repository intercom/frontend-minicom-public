function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col items-center justify-center p-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Main message */}
        <main className="space-y-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 animate-slide-up">
            <div className="space-y-6">
              {/* Intercom Logo */}
              <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <img
                  src="/Intercom_Squinge_Black.svg"
                  alt="Intercom Logo"
                  className="h-12 w-auto transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Main text */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Congratulations! 🎉
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                You are all set for your interview
              </p>
              <p className="text-2xl font-semibold text-green-600">
                Best of luck!
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
