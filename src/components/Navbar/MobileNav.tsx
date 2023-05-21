import { Stack, Link } from "@chakra-ui/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./active_link.scss";

const MobileNav = () => {
	return (
		<Stack
			direction={"row"}
			spacing={2}
			p={4}
			display={{ base: "flex", md: "none" }}
			h="100%"
			align={"center"}
			borderLeft={1}
			borderStyle={"solid"}
			borderColor={"brand.100"}
		>
			<Stack h={"80%"} gap={6}>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
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
			</Stack>
		</Stack>
	);
};

export default MobileNav;
