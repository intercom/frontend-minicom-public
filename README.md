# Minicom Test application

This is a test application that uses the same dependencies as the interview project. It is used to test the dependencies and make sure they are working correctly ahead of your interview.

## What do I have to do?

Follow the setup instructions below and make sure the application is running correctly.

If it is, you should be able to access it at `http://localhost:5173`.

And you should see a message that says "Congratulations, you are all set for your interview" in the center of the page.

🥳 If those worked, well done! You're all set for the interview!

🤔 **If you can't get it working, please let us know ahead of the interview ASAP.** We want to make sure you have it all set up before the interview day.


## How to Run

### Prerequisites
- Node.js (v20.19.0 minimum, version 24 recommended)
- npm (comes with Node.js)

### Installation and Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - The app will typically run on `http://localhost:5173`
   - Vite will display the exact URL in the terminal


## Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Application styles
├── main.jsx         # Application entry point
└── index.css        # Global styles

public/
└── vite.svg         # Vite logo

index.html           # HTML template
package.json         # Project dependencies and scripts
vite.config.js       # Vite configuration
```

## Technology Stack

- **React 19** - UI library
- **Vite** - Build tool and development server
- **ESLint** - Code linting and formatting
- **CSS3** - Styling

This setup provides Hot Module Replacement (HMR) for fast development and includes ESLint rules for code quality.

# Troubleshooting

- Errors running the local dev server are often because of incompatible node versions. Check your node version and ensure you are on at least version 24. 
- This project was last tested with node version 24.18.0 and npm version 10.2.0.