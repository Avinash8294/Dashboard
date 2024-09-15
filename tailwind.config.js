/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {    
      extend: {
        fontFamily: {
          regular: ['regular', 'Arial', 'sans-serif'],          
        },

        fontSize: {
          // Headlines
          heading1Normal: ['25px', { lineHeight: '35px', fontWeight: '500',letterSpacing: '1px' }],
          heading1Semibold: ['25px', { lineHeight: '35px', fontWeight: '600' }],
          heading1Bold: ['25px', { lineHeight: '35px', fontWeight: '700' }],

          heading2Normal: ['24px', { lineHeight: '35px', fontWeight: '500' }],
          heading2Semibold: ['24px', { lineHeight: '35px', fontWeight: '600' }],
          heading2Bold: ['24px', { lineHeight: '35px', fontWeight: '700' }],

          heading3normal: ['20px', { lineHeight: '28px', fontWeight: '500' }],
          heading3Semibold: ['20px', { lineHeight: '28px', fontWeight: '600' }],
          heading3Bold: ['20px', { lineHeight: '28px', fontWeight: '700' }],
          // Texts
          subtitle1: ['16px', { lineHeight: '24px', fontWeight: '700',letterSpacing: '1px' }],
          subtitle2: ['16px', { lineHeight: '22px', fontWeight: '500' }],
          body1: ['16px', { lineHeight: '24px', fontWeight: '500' }],
          body2: ['14px', { lineHeight: '22px', fontWeight: '500' }],
          body3: ['12px', { lineHeight: '18px', fontWeight: '500' }],
          body4: ['12px', { lineHeight: '18px', fontWeight: '700', letterSpacing: '1.2px' }],

          buttonLargeSemibold: ['16px', { lineHeight: '26px', fontWeight: '600' }],
          buttonLargeNormal: ['16px', { lineHeight: '26px', fontWeight: '500' }],
          navLinks: ['20px', { lineHeight: '26px', fontWeight: '500' }],
        },      
        

        colors: {
          primary: '#108699', 
          secondary: '#1E4154', 
          
          // Neutrals
          neutralSmokyBlack: '#10100F',
          neutralComet: '#4B6776',
          neutralGunsmoke: '#788D98',
          neutralMetallicSilver: '#B8C6CC',
          neutralPastelGrey: '#C8CFD2',
          neutralMercury: '#E4EBEA',
          neutralSeaShell: '#EDF0F1',
  
          // Buttons
          buttonPrimary: '#108699', 
          buttonWhite: '#FFF9EA', 
          buttonDangerRed: '#BB2124', 
  
          // Semantics
          semanticLushGreen: '#0AC2A2', 
          semanticMorningBlush: '#EBD877', 
          semanticDangerRed: '#BB2124',
          semanticSandmansCanvas: '#F4E7E2', 

          // Cards

          cardBaseColor: '#F2F8FA',
          cardHeading: '#1E4154',
          subtitleColor: '#788D98',
          cardActive: '#0AC2A2',
          cardDander: '#BB2124'

        },
      },
    
  },
  plugins: [],
}

