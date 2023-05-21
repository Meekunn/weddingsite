import { Flex, Box, Stack, Link } from "@chakra-ui/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./active_link.scss";

const DesktopNav = ({ isScrolled }: INavbar) => {
	return (
		<Stack direction={"row"} spacing={4} px={4} h="100%">
			<Flex>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					color={isScrolled ? "#2d3a4a" : "#fffdf9"}
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
					color={isScrolled ? "#2d3a4a" : "#fffdf9"}
					px={8}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="how"
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
					color={isScrolled ? "#2d3a4a" : "#fffdf9"}
					px={8}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="program"
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
					color={isScrolled ? "#2d3a4a" : "#fffdf9"}
					px={8}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="contact"
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
