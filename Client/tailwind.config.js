module.exports = {
	content: ["./src/**/*.{html,js}"],
	darkMode: "class",
	theme: {
		screens: {
			sm: "640px",
			ms: "700px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "1600px",
			print: { raw: "print" }
		},
		colors: {
			// Theme colors
			primary: {
				DEFAULT: "var(--color-primary-main)",
				light: "var(--color-primary-light)"
			},
			secondary: "var(--color-secondary)",
			tertiary: "var(--color-tertiary)",
			background: "var(--color-background-default)",
			profile: "var(--color-profile)",
			subProfile: "var(--color-subProfile)",
			field: "var(--color-field)",
			bgfield: "var(--color-bgfield)",
			hoverBackground: "var(--color-hoverBackground)",
			bgSidebar: "var(--color-bgSidebar)",
			browserBlack: "var(--color-browserBlack)",
			Browser: "var(--color-Browser)",
			browerTab: "var(--color-browerTab)",
			tagBg: "var(--color-tagBg)",
			fieldColor: "var(--color-fieldColor)",
			dialogBoxBG: "var(--color-dialogBoxBG)",
			bgSearch: "var(--color-bgSearch)",
			bgHeader: "var(--color-bgHeader)",
			bgTextLight: "var(--color-bgTextLight)",
			skyBlue: "var(--color-skyBlue)",
			bgArrow: "var(--color-bgArrow)",
			chatBg: "var(--color-chatBg)",

			popoverBg: "var(--color-popoverBg)",
			cardbg: "var(--color-cardbg)",
			cardbg2: "var(--color-cardbg2)",
			disabled: "var(--color-disabled)",
			coopBoxBg: "var(--color-coopBoxBg)",
			disabledTextBg: "var(--color-disabledTextBg)",
			planBg: "var(--color-planBg)",
			activePlanBg: "var(--color-activePlanBg)",
			coopMemberBg: "var(--color-coopMemberBg)",

			tabBorder: "var(--color-tabBorder)",
			tableHeadBg: "var(--color-tableHeadBg)",
			tableRowBorder: "var(--color-tableRowBorder)",

			timelinePoint: "var(--color-timelinePoint)",
			timelineBorder: "var(--color-timelineBorder)",
			timelineSeparator: "var(--color-timelineSeparator)",

			// Text Colors
			primaryText: "var(--color-primaryText)",
			secondaryText: "var(--color-secondaryText)",
			lightText: "var(--color-lightText)",
			placeholderText: "var(--color-placeholderText)",
			routeText: "var(--color-routeText)",
			SecondaryTextLight: "var(--color-SecondaryTextLight)",
			disabledText: "var(--color-disabledText)",
			disabledtextPrimary: "var(--color-disabledtextPrimary)",

			inputText: "var(--color-inputText)",

			linkText: "var(--color-linkText)",

			tertiaryText: "var(--color-tertiaryText)",
			blackText: "var(--color-blackText)",
			bannerText: "var(--color-bannerText)",

			// Border
			border: "var(--color-border)",
			popoverBorder: "var(--color-popoverBorder)",
			inputBorder: "var(--color-inputBorder)",
			cardBorder: "var(--color-cardBorder)",
			subPrimary: "var(--color-subPrimary)",
			subChip: "var(--color-subChip)",
			subChipAdd: "var(--color-subChipAdd)",
			hoverBorder: "var(--color-hoverBorder)",
			tagBorder: "var(--color-tagBorder)",
			// Highlight
			highlight: "var(--color-highlight)",
			subHighlght: "var(--color-subHighlight)",
			tooltipBackground: "var(--color-tooltipBackground)",
			dropdownListBg: "var(--color-dropdownListBg)",

			// Transparent
			transparent: "transparent",

			warning: {
				DEFAULT: "var(--color-warning-main)",
				light: "var(--color-warning-light)"
			},

			ribbon: {
				DEFAULT: "var(--color-ribbon-main)",
				contrastText: "var(--color-ribbon-contrastText)"
			}
		},
		spacing: {
			xs: "32rem",
			sm: "48rem",
			md: "64rem",
			lg: "80rem",
			xl: "96rem",
			"2xl": "112rem",
			"3xl": "128rem",
			"4xl": "144rem",
			"5xl": "160rem",
			px: "1px",
			0: "0",
			0.5: "0.05rem",
			1: "0.1rem",
			1.5: "0.15rem",
			2: "0.2rem",
			2.5: "0.25rem",
			3: "0.3rem",
			3.5: "0.35rem",
			4: "0.4rem",
			5: "0.5rem",
			6: "0.6rem",
			7: "0.7rem",
			8: "0.8rem",
			9: "0.9rem",
			10: "1.0rem",
			12: "1.2rem",
			14: "1.4rem",
			16: "1.6rem",
			20: "2rem",
			24: "2.4rem",
			28: "2.8rem",
			32: "3.2rem",
			36: "3.6rem",
			40: "4rem",
			44: "4.4rem",
			45: "4.5rem",
			48: "4.8rem",
			50: "5rem",
			52: "5.2rem",
			54: "5.4rem",
			56: "5.6rem",
			58: "5.8rem",
			60: "6rem",
			64: "6.4rem",
			68: "6.8rem",
			72: "7.2rem",
			76: "7.6rem",
			80: "8rem",
			84: "8.4rem",
			88: "8.8rem",
			92: "9.2rem",
			96: "9.6rem",
			100: "10.0rem",
			120: "12.0rem",
			128: "12.8rem",
			136: "13.6rem",
			140: "14.0rem",
			160: "16rem",
			175: "17.5rem",
			192: "19.2rem",
			200: "20rem",
			208: "20.8rem",
			216: "21.6rem",
			224: "22.4rem",
			228: "22.8rem",
			256: "25.6rem",
			288: "28.8rem",
			295: "29.5rem",
			320: "32rem",
			350: "35rem",
			360: "36rem",
			372: "37.2rem",
			378: "37.8rem",
			384: "38.4rem",
			400: "40rem",
			415: "41.5rem",
			425: "42.5rem",
			455: "45.5rem",
			470: "47rem",
			485: "48.5rem",
			450: "45rem",
			512: "51.2rem",
			600: "60rem",
			640: "64rem",
			647: "64.75rem",
			650: "65rem",
			670: "67.5rem",
			aspectRatio: "56.25%"
		},
		animation: {
			none: "none",
			spin: "spin 1s linear infinite",
			ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
			pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			bounce: "bounce 1s infinite"
		},
		backgroundColor: (theme) => theme("colors"),
		backgroundOpacity: (theme) => theme("opacity"),
		backgroundPosition: {
			bottom: "bottom",
			center: "center",
			left: "left",
			"left-bottom": "left bottom",
			"left-top": "left top",
			right: "right",
			"right-bottom": "right bottom",
			"right-top": "right top",
			top: "top"
		},
		backgroundSize: {
			auto: "auto",
			cover: "cover",
			contain: "contain"
		},
		borderColor: (theme) => ({
			...theme("colors"),
			DEFAULT: theme("colors.gray.300", "currentColor")
		}),
		borderOpacity: (theme) => theme("opacity"),
		borderRadius: {
			none: "0",
			sm: ".2rem",
			DEFAULT: ".4rem",
			md: ".6rem",
			lg: ".8rem",
			xl: "1.2rem",
			"2xl": "1.6rem",
			"3xl": "2.4rem",
			full: "9999px",
			inherit: "inherit",
			2: ".2rem",
			4: ".4rem",
			6: ".6rem",
			8: ".8rem",
			12: "1.2rem",
			16: "1.6rem",
			20: "2rem",
			24: "2.4rem",
			28: "2.8rem",
			32: "3.2rem",
			36: "3.6rem"
		},
		borderWidth: {
			DEFAULT: "1px",
			0: "0px",
			1: "1px",
			2: "2px",
			3: "3px",
			4: "4px",
			8: "8px"
		},
		boxShadow: {
			main: "5px 2px 13px 6px rgba(141, 191, 213, 0.05)",
			sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
			DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
			md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
			lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
			xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
			"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
			inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
			none: "none",
			0: "0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)",
			1: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
			2: "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
			3: "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
			4: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
			5: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
			6: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
			7: "0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12)",
			8: "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
			9: "0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12)",
			10: "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
			11: "0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12)",
			12: "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)",
			13: "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12)",
			14: "0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12)",
			15: "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
			16: "0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)",
			17: "0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12)",
			18: "0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12)",
			19: "0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12)",
			20: "0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12)",
			21: "0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12)",
			22: "0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12)",
			23: "0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12)",
			24: "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)"
		},
		caret: (theme) => theme("colors"),
		container: {},
		cursor: {
			auto: "auto",
			default: "default",
			pointer: "pointer",
			wait: "wait",
			text: "text",
			move: "move",
			"not-allowed": "not-allowed"
		},
		divideColor: (theme) => theme("borderColor"),
		divideOpacity: (theme) => theme("borderOpacity"),
		divideWidth: (theme) => theme("borderWidth"),
		fill: {
			current: "currentColor"
		},
		flex: {
			1: "1 1 0%",
			auto: "1 1 auto",
			initial: "0 1 auto",
			none: "none"
		},
		flexGrow: {
			0: "0",
			DEFAULT: "1"
		},
		flexShrink: {
			0: "0",
			DEFAULT: "1"
		},
		fontFamily: {
			sans: ["Roboto"]
		},
		// fontFamily: {
		// 	sans: [
		// 		"Roboto",
		// 		"DM Sans",
		// 		"Muli",
		// 		"-apple-system",
		// 		"BlinkMacSystemFont",
		// 		"Segoe UI",
		// 		"Helvetica Neue",
		// 		"Arial",
		// 		"Noto Sans",
		// 		"sans-serif",
		// 		"Apple Color Emoji",
		// 		"Segoe UI Emoji",
		// 		"Segoe UI Symbol",
		// 		"Noto Color Emoji"
		// 	],
		// 	serif: ["sans-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
		// 	mono: ["Roboto,Consolas", "Liberation Mono", "Menlo", "Courier", "monospace"]
		// },
		fontSize: {
			xs: ["1.2rem", { lineHeight: "1.6rem" }],
			sm: ["1.4rem", { lineHeight: "2rem" }],
			base: ["1.6rem", { lineHeight: "2.4rem" }],
			lg: ["1.8rem", { lineHeight: "2.8rem" }],
			xl: ["2rem", { lineHeight: "2.8rem" }],
			"2xl": ["2.4rem", { lineHeight: "3.2rem" }],
			"3xl": ["3rem", { lineHeight: "3.6rem" }],
			"4xl": ["3.6rem", { lineHeight: "4rem" }],
			"5xl": ["4.8rem", { lineHeight: "1" }],
			"6xl": ["6rem", { lineHeight: "1" }],
			"7xl": ["7.2rem", { lineHeight: "1" }],
			"8xl": ["9.6rem", { lineHeight: "1" }],
			"9xl": ["12.8rem", { lineHeight: "1" }],
			10: ["1rem"],
			11: ["1.1rem"],
			12: ["1.2rem"],
			13: ["1.3rem"],
			14: ["1.4rem"],
			15: ["1.5rem"],
			16: ["1.6rem"],
			17: ["1.7rem"],
			18: ["1.8rem"],
			19: ["1.9rem"],
			20: ["2rem"],
			24: ["2.4rem"],
			28: ["2.8rem"],
			32: ["3.2rem"],
			36: ["3.6rem"],
			40: ["4rem"],
			44: ["4.4rem"],
			48: ["4.8rem"],
			52: ["5.2rem"],
			56: ["5.6rem"],
			60: ["6rem"],
			64: ["6.4rem"],
			68: ["6.8rem"],
			72: ["7.2rem"],
			96: ["9.6rem"],
			128: ["12.8rem"],
			heading: ["3.6rem"],
			subHeading: ["2.4rem"],
			subTitle: ["1.8rem"],
			tab: ["1.6rem"],
			body: ["1.4rem"],
			label: ["1.2rem"]
		},
		fontWeight: {
			thin: "100",
			extralight: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			black: "900",
			100: "100",
			200: "200",
			300: "300",
			400: "400",
			500: "500",
			600: "600",
			700: "700",
			800: "800",
			900: "900"
		},
		gap: (theme) => theme("spacing"),
		gradientColorStops: (theme) => theme("colors"),
		gridAutoColumns: {
			auto: "auto",
			min: "min-content",
			max: "max-content",
			fr: "minmax(0, 1fr)"
		},
		gridAutoRows: {
			auto: "auto",
			min: "min-content",
			max: "max-content",
			fr: "minmax(0, 1fr)"
		},
		gridColumn: {
			auto: "auto",
			"span-1": "span 1 / span 1",
			"span-2": "span 2 / span 2",
			"span-3": "span 3 / span 3",
			"span-4": "span 4 / span 4",
			"span-5": "span 5 / span 5",
			"span-6": "span 6 / span 6",
			"span-7": "span 7 / span 7",
			"span-8": "span 8 / span 8",
			"span-9": "span 9 / span 9",
			"span-10": "span 10 / span 10",
			"span-11": "span 11 / span 11",
			"span-12": "span 12 / span 12",
			"span-full": "1 / -1"
		},
		gridColumnEnd: {
			auto: "auto",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12",
			13: "13"
		},
		gridColumnStart: {
			auto: "auto",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12",
			13: "13"
		},
		gridRow: {
			auto: "auto",
			"span-1": "span 1 / span 1",
			"span-2": "span 2 / span 2",
			"span-3": "span 3 / span 3",
			"span-4": "span 4 / span 4",
			"span-5": "span 5 / span 5",
			"span-6": "span 6 / span 6",
			"span-full": "1 / -1"
		},
		gridRowStart: {
			auto: "auto",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7"
		},
		gridRowEnd: {
			auto: "auto",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7"
		},
		transformOrigin: {
			center: "center",
			top: "top",
			"top-right": "top right",
			right: "right",
			"bottom-right": "bottom right",
			bottom: "bottom",
			"bottom-left": "bottom left",
			left: "left",
			"top-left": "top left"
		},
		gridTemplateColumns: {
			none: "none",
			1: "repeat(1, minmax(0, 1fr))",
			2: "repeat(2, minmax(0, 1fr))",
			3: "repeat(3, minmax(0, 1fr))",
			4: "repeat(4, minmax(0, 1fr))",
			5: "repeat(5, minmax(0, 1fr))",
			6: "repeat(6, minmax(0, 1fr))",
			7: "repeat(7, minmax(0, 1fr))",
			8: "repeat(8, minmax(0, 1fr))",
			9: "repeat(9, minmax(0, 1fr))",
			10: "repeat(10, minmax(0, 1fr))",
			11: "repeat(11, minmax(0, 1fr))",
			12: "repeat(12, minmax(0, 1fr))"
		},
		gridTemplateRows: {
			none: "none",
			1: "repeat(1, minmax(0, 1fr))",
			2: "repeat(2, minmax(0, 1fr))",
			3: "repeat(3, minmax(0, 1fr))",
			4: "repeat(4, minmax(0, 1fr))",
			5: "repeat(5, minmax(0, 1fr))",
			6: "repeat(6, minmax(0, 1fr))"
		},
		height: (theme) => ({
			auto: "auto",
			...theme("spacing"),
			"1/2": "50%",
			"1/3": "33.333333%",
			"2/3": "66.666667%",
			"1/4": "25%",
			"2/4": "50%",
			"3/4": "75%",
			"1/5": "20%",
			"2/5": "40%",
			"3/5": "60%",
			"4/5": "80%",
			"1/6": "16.666667%",
			"2/6": "33.333333%",
			"3/6": "50%",
			"4/6": "66.666667%",
			"5/6": "83.333333%",
			full: "100%",
			screen: "100vh",
			vh65: "65vh",
			vh70: "70vh",
			vh75: "75vh",
			vh80: "80vh",
			vh90: "90vh",
			managePageResponsive: "calc( 100vh - 116px )"
		}),
		inset: (theme, { negative }) => ({
			auto: "auto",
			...theme("spacing"),
			...negative(theme("spacing")),
			"1/2": "50%",
			"1/3": "33.333333%",
			"2/3": "66.666667%",
			"1/4": "25%",
			"2/4": "50%",
			"3/4": "75%",
			full: "100%",
			"-1/2": "-50%",
			"-1/3": "-33.333333%",
			"-2/3": "-66.666667%",
			"-1/4": "-25%",
			"-2/4": "-50%",
			"-3/4": "-75%",
			"-full": "-100%"
		}),
		keyframes: {
			spin: {
				to: {
					transform: "rotate(360deg)"
				}
			},
			ping: {
				"75%, 100%": {
					transform: "scale(2)",
					opacity: "0"
				}
			},
			pulse: {
				"50%": {
					opacity: ".5"
				}
			},
			bounce: {
				"0%, 100%": {
					transform: "translateY(-25%)",
					animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
				},
				"50%": {
					transform: "none",
					animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
				}
			}
		},
		letterSpacing: {
			tighter: "-0.05em",
			tight: "-0.025em",
			normal: "0em",
			wide: "0.025em",
			wider: "0.05em",
			widest: "0.1em"
		},
		lineHeight: {
			none: "1",
			tight: "1.25",
			snug: "1.375",
			normal: "1.5",
			relaxed: "1.625",
			loose: "2",
			3: "1.2rem",
			4: "1.6rem",
			5: "2rem",
			6: "2.4rem",
			7: "2.8rem",
			8: "3.2rem",
			9: "3.6rem",
			10: "4rem"
		},
		listStyleType: {
			none: "none",
			disc: "disc",
			decimal: "decimal"
		},
		margin: (theme, { negative }) => ({
			auto: "auto",
			...theme("spacing"),
			...negative(theme("spacing"))
		}),
		maxHeight: (theme) => ({
			...theme("spacing"),
			full: "100%",
			screen: "100vh",
			auto: "auto"
		}),
		maxWidth: (theme, { breakpoints }) => ({
			none: "none",
			...theme("spacing"),
			full: "100%",
			min: "min-content",
			max: "max-content",
			prose: "65ch",
			vw90: "90vw",
			...breakpoints(theme("screens"))
		}),
		minHeight: (theme) => ({
			auto: "auto",
			...theme("spacing"),
			full: "100%",
			screen: "100vh"
		}),
		minWidth: (theme) => ({
			...theme("spacing"),
			full: "100%",
			min: "min-content",
			max: "max-content",
			screen: "100vw"
		}),
		objectPosition: {
			bottom: "bottom",
			center: "center",
			left: "left",
			"left-bottom": "left bottom",
			"left-top": "left top",
			right: "right",
			"right-bottom": "right bottom",
			"right-top": "right top",
			top: "top"
		},
		opacity: {
			0: "0",
			5: "0.05",
			10: "0.1",
			20: "0.2",
			25: "0.25",
			30: "0.3",
			40: "0.4",
			50: "0.5",
			60: "0.6",
			70: "0.7",
			75: "0.75",
			80: "0.8",
			90: "0.9",
			95: "0.95",
			100: "1"
		},
		order: {
			first: "-9999",
			last: "9999",
			none: "0",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12"
		},
		outline: {
			none: ["2px solid transparent", "2px"],
			white: ["2px dotted white", "2px"],
			black: ["2px dotted black", "2px"]
		},
		padding: (theme) => theme("spacing"),
		placeholderColor: (theme) => theme("colors"),
		placeholderOpacity: (theme) => theme("opacity"),
		ringColor: (theme) => ({
			DEFAULT: theme("colors.blue.500", "#3b82f6"),
			...theme("colors")
		}),
		ringOffsetColor: (theme) => theme("colors"),
		ringOffsetWidth: {
			0: "0px",
			1: "1px",
			2: "2px",
			4: "4px",
			8: "8px"
		},
		ringOpacity: (theme) => ({
			DEFAULT: "0.5",
			...theme("opacity")
		}),
		ringWidth: {
			DEFAULT: "3px",
			0: "0px",
			1: "1px",
			2: "2px",
			4: "4px",
			8: "8px"
		},
		rotate: {
			"-180": "-180deg",
			"-90": "-90deg",
			"-45": "-45deg",
			"-12": "-12deg",
			"-6": "-6deg",
			"-3": "-3deg",
			"-2": "-2deg",
			"-1": "-1deg",
			0: "0deg",
			1: "1deg",
			2: "2deg",
			3: "3deg",
			6: "6deg",
			12: "12deg",
			45: "45deg",
			90: "90deg",
			180: "180deg"
		},
		scale: {
			0: "0",
			50: ".5",
			75: ".75",
			90: ".9",
			95: ".95",
			100: "1",
			105: "1.05",
			110: "1.1",
			125: "1.25",
			150: "1.5"
		},
		skew: {
			"-12": "-12deg",
			"-6": "-6deg",
			"-3": "-3deg",
			"-2": "-2deg",
			"-1": "-1deg",
			0: "0deg",
			1: "1deg",
			2: "2deg",
			3: "3deg",
			6: "6deg",
			12: "12deg"
		},
		space: (theme, { negative }) => ({
			...theme("spacing"),
			...negative(theme("spacing"))
		}),
		stroke: {
			current: "currentColor"
		},
		strokeWidth: {
			0: "0",
			1: "1",
			2: "2"
		},
		textColor: (theme) => theme("colors"),
		textOpacity: (theme) => theme("opacity"),
		transitionDuration: {
			DEFAULT: "150ms",
			75: "75ms",
			100: "100ms",
			150: "150ms",
			200: "200ms",
			300: "300ms",
			500: "500ms",
			700: "700ms",
			1000: "1000ms"
		},
		transitionDelay: {
			75: "75ms",
			100: "100ms",
			150: "150ms",
			200: "200ms",
			300: "300ms",
			500: "500ms",
			700: "700ms",
			1000: "1000ms"
		},
		transitionProperty: {
			none: "none",
			all: "all",
			DEFAULT: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
			colors: "background-color, border-color, color, fill, stroke",
			opacity: "opacity",
			shadow: "box-shadow",
			transform: "transform"
		},
		transitionTimingFunction: {
			DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
			linear: "linear",
			in: "cubic-bezier(0.4, 0, 1, 1)",
			out: "cubic-bezier(0, 0, 0.2, 1)",
			"in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
		},
		translate: (theme, { negative }) => ({
			...theme("spacing"),
			...negative(theme("spacing")),
			"1/2": "50%",
			"1/3": "33.333333%",
			"2/3": "66.666667%",
			"1/4": "25%",
			"2/4": "50%",
			"3/4": "75%",
			full: "100%",
			"-1/2": "-50%",
			"-1/3": "-33.333333%",
			"-2/3": "-66.666667%",
			"-1/4": "-25%",
			"-2/4": "-50%",
			"-3/4": "-75%",
			"-full": "-100%"
		}),
		width: (theme) => ({
			auto: "auto",
			...theme("spacing"),
			"1/2": "50%",
			"1/3": "33.333333%",
			"2/3": "66.666667%",
			"1/4": "25%",
			"2/4": "50%",
			"3/4": "75%",
			"1/5": "20%",
			"2/5": "40%",
			"3/5": "60%",
			"4/5": "80%",
			"1/6": "16.666667%",
			"2/6": "33.333333%",
			"3/6": "50%",
			"4/6": "66.666667%",
			"5/6": "83.333333%",
			"1/12": "8.333333%",
			"2/12": "16.666667%",
			"3/12": "25%",
			"4/12": "33.333333%",
			"5/12": "41.666667%",
			"6/12": "50%",
			"7/12": "58.333333%",
			"8/12": "66.666667%",
			"9/12": "75%",
			"10/12": "83.333333%",
			"11/12": "91.666667%",
			full: "100%",
			screen: "100vw",
			min: "min-content",
			max: "max-content",
			px100: "100px"
		}),
		zIndex: {
			auto: "auto",
			0: "0",
			10: "10",
			20: "20",
			30: "30",
			40: "40",
			50: "50",
			99: "99",
			999: "999",
			9999: "9999"
		}
	},
	plugins: [require("tailwindcss-dir")(), require("@tailwindcss/line-clamp")]
};
