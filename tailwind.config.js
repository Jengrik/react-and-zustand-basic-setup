/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxsm: '0.625rem', // 10px
        xsm: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        regular: '1rem', // 16px
        md: '1.25rem', // 20px
        lg: '1.5rem', // 24px
        xlg: '2rem', // 32px
        xxlg: '2.5rem', // 40px
      },
      lineHeight: {
        xxsm: '0.875rem', // 14px
        xsm: '1rem', // 16px
        sm: '1.25rem', // 20px
        regular: '1.375rem', // 22px
        md: '1.75rem', // 28px
        lg: '2rem', // 32px
        xlg: '2.375rem', // 38px
        xxlg: '2.6875rem', // 43px
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
      }
    },
  },
  plugins: [],
}
