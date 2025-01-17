import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      neutral: {
        light: string;
        dark: string;
        gray: string;
        backdrop: string;
        borderline: string;
      };
      informational: {
        success: string;
        error: string;
        warning: string;
        info: string;
        selected: string;
      };
      miscelleanous: {
        violet: string;
      };
    };

    typography: {
      size: {
        heading: {
          1: string;
          2: string;
          3: string;
          4: string;
          5: string;
          6: string;
        };
        body: string;
        small: {
          1: string;
          2: string;
        };
      };
      weight: {
        regular: string;
        medium: string;
        bold: string;
      };
    };
    spacing: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: number;
      7: number;
      8: number;
      9: number;
      10: number;
      11: number;
      12: number;
      13: number;
      14: number;
      15: number;
      16: number;
      17: number;
      18: number;
      19: number;
      20: number;
    };
  }
}
