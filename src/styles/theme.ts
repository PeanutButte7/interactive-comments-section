import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
    colorScheme: "light",

    // Headings
    headings: {
        fontWeight: "bold",
        sizes: {
            h1: { fontSize: "2.5rem" },
        }
    },

    // Colors
    colors: {
        'brand': ["#e7f5ff", "#d0ebff", "#a5d8ff", "#74c0fc", "#4dabf7", "#339af0", "#228be6", "#1c7ed6", "#1971c2", "#1864ab"],
    },
    primaryColor: 'brand',
    primaryShade: { light: 6, dark: 8 },
};

export default theme;