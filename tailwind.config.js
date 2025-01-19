/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js}",
      "./public/index.html",  
    ],
    theme: {
      extend: {
        colors: {
          primary: "#4CAF50",    
          second: "#FF9800",   
          background: "#333333",  
          text: "#FFFFFF",        
        },
      },
    },
    plugins: [], 
  };
  