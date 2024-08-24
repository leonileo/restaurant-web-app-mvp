const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgba(255, 165, 0, 0.72)",
        secondaryColor: "#1E1E1E",
        textColor: "#332100"
      },
      fontFamily: {
        "Jomolhari": ["Jomolhari", "serif"]
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

