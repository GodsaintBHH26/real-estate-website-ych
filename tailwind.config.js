/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        sm:".75rem",
        base:".875rem",
        md:"1rem",
        lg:"1.25rem",
        xl:"1.5rem",
        "2xl":"1.75rem",
        "3xl":"2.25rem", 
        "4xl": "3rem"
      },
      backgroundImage:{
        'team-bg-image': "url('/public/teams/teams.png')"
      },
      colors: {
        'base-color': '#C4C4C4',
        'bold-color': '#242527'
      },
    },
  },
  plugins: [],
}

