import { Flex, Box, Stack, Link } from "@chakra-ui/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./active_link.scss";

const 	DesktopNav = ({ headerOutOfView }: INavbar) => {
	return (
		<Stack direction={"row"} spacing={4} px={4} h="100%">
			<Flex align="center" justify="space-around">
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					color={headerOutOfView ? "#2d3a4a" : "#fffdf9"}
					px={{ md: 4, lg: 8 }}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="home"
					spy={true}
					smooth={true}
					fontWeight={headerOutOfView ? "medium" : "semibold"}
					duration={500}
					className="navlinks"
				>
					Home
				</Link>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					color={headerOutOfView ? "#2d3a4a" : "#fffdf9"}
					px={{ md: 4, lg: 8 }}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="couple"
					spy={true}
					smooth={true}
					duration={500}
					fontWeight={headerOutOfView ? "medium" : "semibold"}
					className="navlinks"
				>
					Couple
				</Link>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					color={headerOutOfView ? "#2d3a4a" : "#fffdf9"}
					px={{ md: 4, lg: 8 }}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="program"
					spy={true}
					smooth={true}
					duration={500}
					fontWeight={headerOutOfView ? "medium" : "semibold"}
					className="navlinks"
				>
					Order of Program
				</Link>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					color={headerOutOfView ? "#2d3a4a" : "#fffdf9"}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="date"
					spy={true}
					smooth={true}
					duration={500}
					fontWeight={headerOutOfView ? "medium" : "semibold"}
					className="navlinks"
				>
					Dates
				</Link>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					color={headerOutOfView ? "#2d3a4a" : "#fffdf9"}
					px={{ md: 4, lg: 8 }}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					duration={500}
					fontWeight={headerOutOfView ? "medium" : "semibold"}
					className="navlinks"
				>
					Contact
				</Link>
			</Flex>
		</Stack>
	);
};

export default DesktopNav;
