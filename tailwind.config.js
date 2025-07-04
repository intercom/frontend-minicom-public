/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-delayed': 'fadeIn 1.5s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1s',
        'float-slow': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'confetti-fall': 'confettiFall 3s linear infinite',
        'confetti-fall-slow': 'confettiFall 5s linear infinite',
        'confetti-fall-fast': 'confettiFall 2s linear infinite',
        'rainbow-border': 'rainbowBorder 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        confettiFall: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        rainbowBorder: {
          '0%': { borderColor: '#ff0000' },
          '16.66%': { borderColor: '#ff8000' },
          '33.33%': { borderColor: '#ffff00' },
          '50%': { borderColor: '#00ff00' },
          '66.66%': { borderColor: '#0080ff' },
          '83.33%': { borderColor: '#8000ff' },
          '100%': { borderColor: '#ff0000' },
        },
      },
      animationDelay: {
        '500': '0.5s',
        '1000': '1s',
        '1500': '1.5s',
        '2000': '2s',
        '3000': '3s',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
