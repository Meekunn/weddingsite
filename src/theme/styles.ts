import { extendTheme } from "@chakra-ui/react";

const styles = extendTheme({
	styles: {
		global: {
			body: {
				bg: "#fffdf9",
				color: "#2d3a4a",
			},
		},
	},
	colors: {
		brand: {
			gold: "#F7E7CE",
			oldlace: "#F8EEE0",
			turquoise1: "#30D5C8",
			turquoise2: "#4BE7DA",
		},
	},
	fonts: {
		heading: "var(--font-cormorant_upright)",
		body: "var(--font-poppins)",
	},
});

export default styles;
