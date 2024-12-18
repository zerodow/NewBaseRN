const plugin = require("tailwindcss/plugin")
const { colors } = require("./src/theme/colors")

module.exports = {
  theme: {
    screens: {
      sm: "380px",
      md: "420px",
      lg: "680px",
      tablet: "1024px",
    },
    fontFamily: {
      sans: ["Helvetica"],
    },
    colors: {
      ...colors,
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        "btn": {
          padding: 3,
          borderRadius: 10,
          textTransform: "uppercase",
          backgroundColor: "#333",
        },
        "resize-repeat": {
          resizeMode: "repeat",
        },
        "center": {
          justifyContent: "center",
          alignItems: "center",
        },
        "common-shadow": {
          shadowColor: "#FB741C40",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.43,
          shadowRadius: 9.51,

          elevation: 15,
        },
        "common-shadow-200": {
          shadowColor: "#9C9C9C",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        },
        "common-shadow-400": {
          shadowColor: "gray",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.44,
          shadowRadius: 10.32,
          elevation: 16,
        },
        "common-shadow-600": {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.44,
          shadowRadius: 10.32,
          elevation: 16,
        },
        "common-shadow-white": {
          backgroundColor: "white",
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.04,
          shadowRadius: 4,
          elevation: 4,
        },
        "dropBack": {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: 41,
        },
      })
    }),
  ],
}
