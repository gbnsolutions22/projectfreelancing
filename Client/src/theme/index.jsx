import { createTheme } from "@mui/material";

export const DEFAULT_THEME_NAME = "dark";

export const DEFAULT_THEME_PROPERTIES = {
	typography: {
		fontFamily: ["Roboto"].join(" ")
	},
	zIndex: {
		drawer: 50
	}
};

export const themes = {
	light: {
		mode: "light",
		...DEFAULT_THEME_PROPERTIES
	},
	dark: {
		mode: "dark",
		...DEFAULT_THEME_PROPERTIES
	}
};

export const themeColors = {
	light: {
		// Theme colors
		primary: {
			main: "#1971FF",
			light: "#F1F5EB"
		},
		secondary: "#ECEC5A",
		tertiary: "#8CB649",
		background: {
			default: "#FFFFFF"
		},

		bgSidebar: "#E6E7F1",
		profile: "#2A2A2A",
		subProfile: "#FFFFFF",
		field: "#EEEEEE",
		hoverBackground: "#F0F0F0",
		skyBlue: "#1F6DAD",
		popoverBg: "#FFFFFF",
		dialogBg: "#333333",
		tagBg: "#B3B8D6",
		coopBoxBg: "#353C63",
		disabledTextBg: "#F7F7F7",
		dialogBoxBG: "#FFFFFF",
		coopMemberBg: "#1E2757",
		// Text Colors
		primaryText: "#333333",
		secondaryText: "#909090",
		lightText: "#FFFFFF",

		placeholderText: "#A0A0A0",
		inputText: "#454E80",
		SecondaryTextLight: "#6F6F6F",
		disabledText: "#9A9A9A",
		disabledtextPrimary: "#B7B7B7",
		planBg: "#E6E7F1",
		activePlanBg: "#9A9A9A",

		tabBorder: "#1E2745",
		tableHeadBg: "#E6E7F1",
		tableRowBorder: "#E6E7F1",

		timelinePoint: "#454E80",
		timelineBorder: "#1E2745",
		timelineSeparator: "#8B93C1",

		tertiaryText: "#777777",
		blackText: "#000000",
		disabled: "#8C8C8C",

		linkText: "#6E78B1",

		// Border
		border: "#DDDDDD",
		popoverBorder: "#363636",
		inputBorder: "#A8AED0",
		cardBorder: "#EEEEEE",
		subPrimary: "#507D2A",
		subChip: "#E6E7F1",
		subChipAdd: "#CCD0E4",
		tagBorder: "#99A0C8",
		fieldColor: "#EEEEEE",
		// Highlight
		highlight: "#F4F5F4",
		subHighlight: "#F4F5F4",
		tooltipBackground: "#FFFDD0",
		dropdownListBg: "#FFFFFF",

		bannerText: "#FFFFFF",

		warning: {
			main: "#E01E5A",
			light: "#FCE8EE"
		},

		scrollbar: {
			thumb: "#A8AED0",
			active: "#A8AED0",
			track: "#3c3f5300"
		},

		ribbon: {
			main: "#54609D",
			contrastText: "#FFFFFF"
		}
	},
	dark: {
		// Theme colors
		primary: {
			main: "#473865",
			light: "#F1F5EB"
		},
		secondary: "#ECEC5A",
		tertiary: "#8CB649",
		background: {
			default: "#0C0911"
		},
		bgSidebar: "#0C0911",
		bgSearch: "#302644",
		bgHeader: "#181322",
		field: "#43355F",
		bgfield: "#473865",
		bgTextLight: "#C9BFDD",
		profile: "#2A2A2A",
		subProfile: "#2A2A2A",
		hoverBackground: "#212121",
		skyBlue: "#1F6DAD",
		bgArrow: "#5F4B87",
		Browser: "#2BACE2",
		popoverBg: "#161929",
		cardbg: "#444444",
		cardbg2: "#262626",
		browserBlack: "#28292C",
		browerTab: "#18191B",
		disabled: "#525252",
		dialogBg: "#161929",
		chatBg: "#241C33",
		coopBoxBg: "#353C63",
		fieldColor: "#222222",
		disabledTextBg: "#191f35",
		planBg: "#0D0E16",
		activePlanBg: "#1e2745",
		dialogBoxBG: "#141624",
		dropdownPointer: "#3f4461",
		coopMemberBg: "#1E2757",
		// Text Colors
		primaryText: "#FFFFFF",
		secondaryText: "#8B93C1",
		lightText: "#181818",
		placeholderText: "#A8AED0",
		inputText: "#A8AED0",
		tertiaryText: "#777777",
		blackText: "#000000",
		linkText: "#6E78B1",
		routeText: "#C5C9E0",
		disabledText: "#5F627B",
		disabledtextPrimary: "#8A8B92",

		tabBorder: "#1E2745",
		tableHeadBg: "#1E2745",
		tableRowBorder: "#1E2745",

		timelinePoint: "#454E80",
		timelineBorder: "#1E2745",
		timelineSeparator: "#8B93C1",

		// Border
		border: "#363636",
		popoverBorder: "#363636",
		inputBorder: "#A8AED0",
		cardBorder: "#EEEEEE",
		subPrimary: "#ECEC5A",
		subChip: "#1E2745",
		subChipAdd: "#54609D",

		hoverBorder: "#B2B8DA",
		// Highlight
		highlight: "#909090",
		subHighlight: "#2A2A2A",
		tooltipBackground: "#FFFDD0",
		dropdownListBg: "#43355F",

		bannerText: "#FFFFFF",

		warning: {
			main: "#FF7777",
			light: "#FCE8EE"
		},

		scrollbar: {
			thumb: "#8B8696",
			active: "#A8AED0",
			track: "transparent"
		},

		ribbon: {
			main: "#54609D",
			contrastText: "#FFFFFF"
		}
	},
	light2: {
		// Theme colors
		primary: {
			main: "#507D2A",
			light: "#F1F5EB"
		},
		secondary: "#ECEC5A",
		tertiary: "#8CB649",
		background: "#FFFFFF",
		profile: "#2A2A2A",
		subProfile: "#FFFFFF",
		field: "#0D0F12",
		hoverBackground: "#F0F0F0",
		skyBlue: "#1F6DAD",
		popoverBg: "#F0F2CC",

		// Text Colors
		primaryText: "#333333",
		secondaryText: "#909090",
		lightText: "#FFFFFF",
		placeholderText: "#A0A0A0",
		tertiaryText: "#777777",
		blackText: "#000000",

		// Border
		border: "#DDDDDD",
		inputBorder: "#56575A",
		cardBorder: "#EEEEEE",
		subPrimary: "#507D2A",
		subChip: "#ADADAD",
		// Highlight
		highlight: "#F4F5F4",
		subHighlight: "#F4F5F4",
		tooltipBackground: "#FFFDD0",

		bannerText: "#FFFFFF",

		warning: {
			main: "#E01E5A",
			light: "#FCE8EE"
		},
		scrollbar: {
			thumb: "#A8AED0",
			active: "#A8AED0",
			track: "#3c3f5300"
		}
	},
	dark2: {
		// Theme colors
		primary: "#507D2A",
		secondary: "#ECEC5A",
		tertiary: "#8CB649",
		background: "#181818",
		profile: "#2A2A2A",
		subProfile: "#2A2A2A",
		field: "#0D0F12",
		hoverBackground: "#212121",
		skyBlue: "#1F6DAD",
		popoverBg: "#F0F2CC",

		// Text Colors
		primaryText: "#FFFFFF",
		secondaryText: "#909090",
		lightText: "#181818",
		placeholderText: "#A0A0A0",
		tertiaryText: "#777777",
		blackText: "#000000",

		// Border
		border: "#363636",
		inputBorder: "#56575A",
		cardBorder: "#EEEEEE",
		subPrimary: "#ECEC5A",
		subChip: "#56575A",
		// Highlight
		highlight: "#909090",
		subHighlight: "#2A2A2A",
		tooltipBackground: "#FFFDD0",

		bannerText: "#FFFFFF",

		warning: {
			main: "#FF7777",
			light: "#FCE8EE"
		}
	}
};

export const THEME_TYPOGRAPHY = {
	fontFamily: ["DM Sans"].join(" ")
};

export const getThemeByThemeName = (themeName) => {
	// Return theme by theme name, if theme name doesn't exists then return default theme
	const colors = themeColors[themeName] || themeColors[DEFAULT_THEME_NAME];
	const theme = themes[themeName] || themes[DEFAULT_THEME_NAME];
	return { colors, ...theme };
};

export const createPalettes = (theme) => {
	const { colors, mode } = theme;
	const palettes = { mode };

	for (let key in colors) {
		if (typeof colors[key] === "object") palettes[key] = colors[key];
		else {
			palettes[key] = {
				main: colors[key]
			};
		}
	}

	return palettes;
};

export const createCSSVariable = (name, prefix = "color") => {
	return `--${prefix}-${name}`;
};

export const getVariableValue = (variants, prefix = "color") => {
	return `var(--${prefix}-${variants})`;
};


export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        sizeSmall: {
          padding: "6px 16px",
        },
        sizeMedium: {
          padding: "8px 20px",
        },
        sizeLarge: {
          padding: "11px 24px",
        },
        textSizeSmall: {
          padding: "7px 12px",
        },
        textSizeMedium: {
          padding: "9px 16px",
        },
        textSizeLarge: {
          padding: "12px 16px",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
      styleOverrides: {
        root: {
          padding: "32px 24px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#E6E8F0",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#F3F4F6",
          ".MuiTableCell-root": {
            color: "#374151",
          },
          borderBottom: "none",
          "& .MuiTableCell-root": {
            borderBottom: "none",
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          },
          "& .MuiTableCell-paddingCheckbox": {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
  },
  palette: {
    neutral: {
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    action: {
      active: "#6B7280",
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "rgba(55, 65, 81, 0.08)",
      disabledBackground: "rgba(55, 65, 81, 0.12)",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
    background: {
      default: "#F9FAFC",
      paper: "#FFFFFF",
      body: "#F0F2F5",
    },
    divider: "#E6E8F0",
    primary: {
      main: "#5048E5",
      light: "#828DF8",
      dark: "#3832A0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#10B981",
      light: "#3FC79A",
      dark: "#0B815A",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#14B8A6",
      light: "#43C6B7",
      dark: "#0E8074",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#2196F3",
      light: "#64B6F7",
      dark: "#0B79D0",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFB020",
      light: "#FFBF4C",
      dark: "#B27B16",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#D14343",
      light: "#DA6868",
      dark: "#922E2E",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#121828",
      secondary: "#65748B",
      disabled: "rgba(55, 65, 81, 0.48)",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.57,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.375,
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.375,
      margin: "16px 0 8px",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.375,
    },
  },
});
