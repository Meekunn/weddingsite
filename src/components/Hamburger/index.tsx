import { Icon } from "@chakra-ui/react";
import "./hamburger.scss";
import { JSX } from "react";

const Hamburger = (props: JSX.IntrinsicAttributes) => {
	return (
		<Icon width={7} height={7} viewBox="0 0 25 16" fill="none" {...props}>
			<rect width="25" height="2" transform="matrix(1 0 0 -1 0 9)" fill="#F5CF93" />
			<rect x="13" width="12" height="2" fill="#F5CF93" />
			<rect y="14" width="12" height="2" fill="#F5CF93" />
		</Icon>
	);
};

export default Hamburger;
