import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  colors: {
    neutral: {
      light: "#FFFFFF",
      dark: "#141414",
      gray: "#9B99A6",
      backdrop: "#F4F4F6",
      borderline: "#F0F0F0",
    },
    informational: {
      success: "#448D62",
      error: "#D6767A",
      warning: "#E3CA26",
      info: "#2464EC",
      selected: "#FDFBFF",
    },
    miscelleanous: {
      violet: "#9A77B9",
    },
  },
  typography: {
    size: {
      heading: {
        1: "32px",
        2: "28px",
        3: "25px",
        4: "22px",
        5: "20px",
        6: "18px",
      },
      body: "16px",
      small: {
        1: "14px",
        2: "12px",
      },
    },
    weight: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
  },
  spacing: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    13: 52,
    14: 56,
    15: 60,
    16: 64,
    17: 68,
    18: 72,
    19: 76,
    20: 80,
  },
};

export default defaultTheme;
