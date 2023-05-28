import { Stack, Link, Flex, Button } from "@chakra-ui/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./active_link.scss";
import Hamburger from "../Hamburger";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const MobileNav = ({ isScrolled, isOpen, setIsOpen }: IMobileNavbar) => {
	// const [isOpen, setIsOpen] = useState(true);

	return (
		<Stack
			direction={"column"}
			gap={6}
			p={4}
			display={{ base: "flex", md: "none" }}
			h="100vh"
			align={"flex-start"}
			justify={"space-around"}
			borderLeft={1}
			borderStyle={"solid"}
			borderColor={"brand.100"}
			bg="#fffdf9"
			transform={
				isOpen ? "translateX(0%) translateY(0px) translateZ(0px)" : "translateX(100%) translateY(0px) translateZ(0px)"
			}
			position="relative"
			top="-75px"
			width="55%"
			right="-45%"
			transition={"0.3s all ease-in-out"}
		>
			<Flex w="100%" justify={"flex-end"}>
				<Button fontSize={"2xl"} onClick={() => setIsOpen(false)}>
					<GrClose />
				</Button>
			</Flex>
			<Stack h={"80%"} gap={6} pl={4}>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					color={"#2d3a4a"}
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
					color={"#2d3a4a"}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="couple"
					spy={true}
					smooth={true}
					duration={500}
					className="navlinks"
				>
					Couple
				</Link>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					color={"#2d3a4a"}
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
					color={"#2d3a4a"}
					_hover={{
						fontWeight: 600,
					}}
					activeClass="active"
					to="dates"
					spy={true}
					smooth={true}
					duration={500}
					className="navlinks"
				>
					Dates
				</Link>
				<Link
					as={ScrollLink}
					textDecoration={"none !important"}
					color={"#2d3a4a"}
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
			</Stack>
		</Stack>
	);
};

export default MobileNav;
