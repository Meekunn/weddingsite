import { Flex, Box, Stack, Link } from "@chakra-ui/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./active_link.scss";

const DesktopNav = () => {
	return (
		// const linkColor = useColorModeValue('gray.600', 'gray.200');
		// const linkHoverColor = useColorModeValue('gray.800', 'white');
		<Stack direction={"row"} spacing={4} px={4} h="100%">
			<Flex>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					px={8}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="home"
					spy={true}
					smooth={true}
					duration={500}
					className="navlinks"
				>
					Home
				</Link>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					px={8}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="home"
					spy={true}
					smooth={true}
					duration={500}
					className="navlinks"
				>
					How It Started
				</Link>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					px={8}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="home"
					spy={true}
					smooth={true}
					duration={500}
					className="navlinks"
				>
					Order of Program
				</Link>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					px={8}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="home"
					spy={true}
					smooth={true}
					duration={500}
					className="navlinks"
				>
					Contact
				</Link>
			</Flex>
		</Stack>
	);
};

export default DesktopNav;
