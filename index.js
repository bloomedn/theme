const styles = {
    root: {
        fontFamily: "base",
        fontWeight: "light",
        backgroundColor: "white",
        color: "text",
        fontSize: 4,
        lineHeight: "body",
        letterSpacing: 'body',
    },
};

const breakpoints = ["640px", "768px", "1024px", "1380px", "1536px"];
const opacities = [0, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
const sizes = [0, 4, 8, 12, 16, 24, 28, 32, 36, 48, 64];
const space = [0, 4, 8, 12, 16, 32, 64, 128, 246, 450];

const colorSettings = {
    config: {
        initialColorModeName: "light",
        printColorModeName: "light",
    },
    colors: {
        text: "#222222",
        background: "#F4F4F4",
        backgroundlight: "#e8e8e8", 
        white: "#ffffff",
        borderColor: '#DCE5EA', 
        primary: "#FF0101",
        secondary: "#1606AA",
        lightPrimary: "#F6C3C3",
        lightestPrimary: "#FAEAEA",
        mutedPrimary: "#FAEAEA",
        cancel: "#FF0000",
        correct: "#28A745",
        available: "#6CC986",
        link: "#0000EE",
        gray: "#C4C4C4",
        lightGray: "#f5f5f5",
        darkGray: "#727272",
        darkBlue: '#182334',
        darkPrimary: '#cc0101',
        // modes: {
        //     dark: {
        //         text: "#fff",
        //         background: "#000",
        //         primary: "#ocf",
        //        secondary: "#09c",
        //         muted: "#111",
        //     },
        // },
    },
};

const layout = {
    toolbar: {
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-between",
    },
    footer: {
        backgroundColor: "background_secondary",
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
        caps: "0.2em",
    },
};

const radii = {
    none: "0px",
    base: "4px",
    large: "0.5rem",
    full: "9999px",
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
    styles: { ...styles },
    breakpoints: [...breakpoints],
    opacities: [...opacities],
    space: [...space],
    sizes: [...sizes],
    radii: { ...radii },
    shadows: { ...shadows },
};
