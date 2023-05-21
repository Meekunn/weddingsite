import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import fonts from "./foundation/fonts";
import colors from "./foundation/colors";

const theme = extendTheme({
	styles,
	fonts,
	colors,
});

export default theme;
