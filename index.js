const styles = {
  root: {
    fontFamily: "base",
    fontWeight: "light",
    backgroundColor: "white",
    color: "text",
    fontSize: 4,
    lineHeight: "body",
    letterSpacing: "body",
  },
  srOnly: {
    border: "0 !important",
    clip: "rect(1px, 1px, 1px, 1px) !important",
    clipPath: "inset(50%) !important",
    height: "1px !important",
    margin: "-1px !important",
    overflow: "hidden !important",
    padding: "0 !important",
    position: "absolute !important",
    width: "1px !important",
    whiteSpace: "nowrap !important",
  },
};

const breakpoints = [
  "480px",
  "640px",
  "768px",
  "1024px",
  "1220px",
  "1366px",
  "1620px",
];
const opacities = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
const sizes = [0, 4, 8, 12, 16, 24, 28, 32, 36, 48, 64];

// const space = [0, 4, 8, 12, 16, 32, 64, 128, 246, 450];

const space = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 100, 110,
  120, 130, 140, 150, 160,
];

const colorSettings = {
  config: {
    initialColorModeName: "light",
    printColorModeName: "light",
  },
  colors: {
    text: "#343D48", // body color and primary color
    background: "#F4F4F4",
    backgroundSecondary: "#3f70a1", // secondary background color
    backgroundlight: "#e8e8e8",
    borderColor: "#DCE5EA",
    primary: "#FF0101", // primary button and link color
    secondary: "#1606AA",
    lightPrimary: "#F6C3C3",
    lightestPrimary: "#FAEAEA",
    mutedPrimary: "#7B8188",
    cancel: "#FF0000",
    correct: "#28A745",
    available: "#6CC986",
    link: "#0000EE",
    gray: "#C4C4C4",
    lightGray: "#f5f5f5",
    darkGray: "#727272",
    darkBlue: "#182334",
    darkPrimary: "#cc0101",
    heading: "#0F2137", // primary heading color
    headingSecondary: "#0F2137", // heading color
    accent: "#609", // a contrast color for emphasizing UI
  },
};

const layout = {
  toolbar: {
    display: "flex",
    alignItems: "center",
  },
  footer: {
    color: "backgroundSecondary",
  },
  main: {
    color: "text",
  },
};

// variants for buttons
const buttons = {
  menu: {
    display: "block",
    background: "transparent",
    fontWeight: 400,
    color: "heading",
    mx: "1px",
    position: "relative",
  }, // default variant for MenuButton
  // you can reference other values defined in the theme
  defaultBtn: {
    borderRadius: "45px",
    fontSize: ["14px", null, null, 2],
    letterSpacings: "-0.15px",
    padding: ["12px 20px", null, "15px 30px"],
    fontFamily: "body",
    cursor: "pointer",
    lineHeight: 1.2,
    transition: "all 0.25s",
    fontWeight: 500,
    "&:focus": {
      outline: 0,
    },
  },
  primary: {
    variant: "buttons.defaultBtn",
    color: "text_secondary",
    bg: "primary",
    "&:hover": {
      boxShadow: "rgba(233, 76, 84, 0.57) 0px 9px 20px -5px",
    },
  },
  small: {
    variant: "buttons.secondary",
    padding: ["10px 20px", "10px 20px", "10px 20px", "10px 20px", "10px 20px"],
  },
  teachSecondary: {
    variant: "buttons.secondary",
    borderRadius: "5px",
    padding: ["10px 20px", null, "10px 20px"],
    fontWeight: "bold",
    borderColor: "#F34E4E",
    ml: 2,
    "&:hover": {
      color: "#F34E4E",
    },
  },
  teachPrimary: {
    variant: "buttons.teachSecondary",
    borderRadius: "5px",
    padding: ["10px 20px", null, "10px 20px"],
    backgroundColor: "#F34E4E",
    color: "white",
    borderColor: "#F34E4E",
    fontWeight: "bold",
    ml: 2,
    "&:hover": {
      color: "white",
    },
  },
  secondary: {
    variant: "buttons.defaultBtn",
    border: "2px solid",
    borderColor: "primary",
    color: "primary",
    bg: "transparent",
    padding: ["10px 15px", null, "15px 30px"],
    "&:hover": {
      color: "white",
      bg: "primary",
    },
  },

  secondaryGroup: {
    variant: "buttons.secondary",
    mx: [1],
  },

  textButton: {
    variant: "buttons.defaultBtn",
    backgroundColor: "transparent",
    cursor: "pointer",
    color: "white",
    svg: {
      fontSize: [4, 6],
      mr: 2,
    },
  },
  smallPadding: {
    variant: "buttons.defaultBtn",
    padding: ["10px 5px"],
    backgroundColor: "transparent",
  },
};

const sectionHeader = {
  width: ["100%", null, "540px"],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mt: ["-3px", null, -1],
  marginBottom: ["50px", null, "60px", null, null, "65px", null, "80px"],
  mx: "auto",
  title: {
    fontSize: ["24px", null, "28px", null, null, "32px", null, "36px"],
    color: "heading",
    lineHeight: [1.3, null, null, 1.25],
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: "-.5px",
  },
  subTitle: {
    fontSize: [0, "13px", null, "14px"],
    color: "primary",
    textAlign: "center",
    letterSpacing: ["1.5px", null, "2px"],
    textTransform: "uppercase",
    fontWeight: "700",
    mb: 2,
    lineHeight: 1.5,
  },
};

const fontSettings = {
  fonts: {
    base: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 18, 24, 30, 42, 50, 68, 96, 128],

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    heading: 600,
    bold: 600,
  },
  lineHeights: {
    none: 1,
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    medium: "0.1em",
    caps: "0.15em",
    heading: "-0.5px",
  },
};

const radii = {
  none: "0px",
  base: "4px",
  large: "0.5rem",
  full: "9999px",
};

const forms = {
  label: {
    fontSize: 1,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 8,
    borderColor: "border_color",
    color: "red",
    height: 60,
    "&:focus": {
      borderColor: "primary",
      boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      outline: "none",
    },
  },
};

const section = {
  keyFeature: {
    pt: [8, null, 9, null, null, 10],
    pb: ["90px", null, 9, null, null, 10, null, "165px"],
  },
  feature: {
    pb: [8, null, 9, null, null, 10, null, "170px"],
  },
  news: {
    pb: [8, null, 9, null, null, 10, null, "170px"],
  },
  coreFeature: {
    pb: [8, null, 9, null, null, 10, null, "170px"],
    overflow: "hidden",
  },
  testimonial: {
    pt: [8, null, 8, "70px", null, 8, null, "145px"],
    pb: ["90px", null, 9, null, null, 10, null, "190px"],
    overflow: "hidden",
  },
  services: {
    pb: ["90px", null, 9, null, null, 10, null, "150px"],
  },
  pricing: {
    pt: [8, null, 9, null, null, 10, null, "180px"],
    pb: ["90px", null, 9, null, null, 10, null, "180px"],
  },
};

const shadows = {
  none: "0 0 0",
  small: "0 1px 1px rgba(114, 114, 114, 1)",
  smallTransparent: "0 1px 1px rgba(114, 114, 114, 0.1)",
  light: "0 5px 5px rgba(114, 114, 114, 0.4)",
  lightTransparent: "0 5px 5px rgba(114, 114, 114, 0.1)",
  base: "0 5px 5px #727272",
};

export default {
  ...colorSettings,
  ...layout,
  ...fontSettings,
  ...forms,
  sectionHeader: { ...sectionHeader },
  section: { ...section },
  buttons: { ...buttons },
  styles: { ...styles },
  breakpoints: [...breakpoints],
  opacities: [...opacities],
  space: [...space],
  sizes: [...sizes],
  radii: { ...radii },
  shadows: { ...shadows },
};
