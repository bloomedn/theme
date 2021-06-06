const styles = {
    root: {
        fontFamily: "body",
        fontWeight: "body",
        backgroundColor: "background",
    },
};

const breakpoints = ["640px", "768px", "1024px", "1280px", "1536px"];
const opacities = [0, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
const sizes = [0, 4, 8, 12, 16, 24, 28, 32, 36, 48, 64];
const space = [0, 4, 8, 12, 16, 32, 64, 128, 246, 1200];

const colorSettings = {
    config: {
        initialColorModeName: "light",
        printColorModeName: "light",
    },
    colors: {
        text: "#f0f",
        background: "#fff",
        primary: "#0070f3",
        primaryComplement: "#fff",
        secondary: "#000",
        secondaryComplement: "#fff",
        accent: "red",
        link: "red",
        highlight: "#defdef",
        muted: "#efefef",
        modes: {
            dark: {
                text: "#fff",
                background: "#000",
                primary: "#ocf",
            },
        },
    },
};

const fontSettings = {
    fonts: {
        body: "sans-serif",
        heading: '"Monoton", sans-serif',
        monospace: "Menlo, monospace",
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 64, 96, 128, 144, 164],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    letterSpacings: {
        body: "normal",
        medium: "0.1em",
        caps: "0.2em",
    },
};

export default {
    ...colorSettings,
    ...fontSettings,
    styles: { ...styles },
    breakpoints: [...breakpoints],
    opacities: [...opacities],
    space: [...space],
    sizes: [...sizes],
};
