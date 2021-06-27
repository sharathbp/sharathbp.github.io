import mixins from "./mixins";

const dark = {
  background: "#171941",
  surface: "#1C1D45",
  primary: "#4F053B",
  secondary: "#3AC773",
  onBackground: "#FFFFFF",
  onSurface: "#FFFFFF",
  onPrimary: "#FFFFFF",
  onSecondary: "#FFFFFF",
}
const light = {
  background: "#FFFFFF",
  surface: "#FFFFFF",
  primary: "#FFFFFF",
  secondary: "#FFFFFF",
  onBackground: "#000000",
  onSurface: "#000000",
  onPrimary: "#000000",
  onSecondary: "#000000",
}

const theme = {
  ...dark,
  bp: {
    mobileS: `max-width: 330px`,
    background: '#171941',
  },
  mixins
}

export default theme
