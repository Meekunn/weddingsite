import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Flex
			position={"relative"}
			bottom="0"
			justify="center"
			align="center"
			borderTop={1}
			borderTopStyle={"solid"}
			borderTopColor={"brand.200"}
			py={2}
		>
			<Text fontSize={"md"}>Copyright &copy;AyoAde'23</Text>
		</Flex>
	);
};

export default Footer;
