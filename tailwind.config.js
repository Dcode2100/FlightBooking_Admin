/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#faf9ff",
        gray: "#27292c",
        darkgray: "#9aa2ac",
        dimgray: "#6b7178",
        white: "#fff",
        mediumslateblue: "#346aff",
        coral: {
          "100": "#ff742c",
          "200": "rgba(255, 116, 44, 0.1)",
        },
        seagreen: "rgba(0, 133, 86, 0.1)",
        mediumseagreen: {
          "100": "#03af72",
          "200": "#02af72",
        },
        lavender: "#d7e1fe",
        blueviolet: "#6c50fc",
        lightblue: "#cfedfe",
        crimson: "#de1c22",
      },
      spacing: {},
      fontFamily: {
        h400: "Sora",
      },
      borderRadius: {
        "980xl": "999px",
        "80xl": "99px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      sm: "0.875rem",
      base: "1rem",
      xs: "0.75rem",
      "13xl": "2rem",
      "base-7": "0.981rem",
      "53xl": "4.5rem",
      "3xs": "0.625rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
