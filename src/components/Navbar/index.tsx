import { useDisclosure, Box, Flex, IconButton, useBreakpointValue, Heading, Slide } from "@chakra-ui/react";
import Hamburger from "../Hamburger";
import { GrClose } from "react-icons/gr";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { slideStyle } from "./style";
import { useState, useEffect } from "react";

const Navbar = () => {
	// const { isOpen, onToggle } = useDisclosure();
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isTop = window.scrollY === 0; // Check if user has scrolled to the top of the page
			setIsScrolled(!isTop); // Update the state based on scroll position
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Box position="fixed" w="100%" zIndex={"2000"}>
			<Flex
				p={4}
				px={6}
				align={"center"}
				minH={"60px"}
				borderBottom={1}
				borderColor={isScrolled ? "brand.100" : "transparent"}
				borderStyle={"solid"}
				bg={isScrolled ? "#fffdf9" : "transparent"}
			>
				<Flex flex={{ base: 1 }} justify={{ base: "flex-start", md: "space-between" }} align="center">
					<Heading
						color={isScrolled ? "#2d3a4a" : "#fffdf9"}
						textAlign={useBreakpointValue({ base: "center", md: "left" })}
					>
						A&K
					</Heading>
					<Flex display={{ base: "none", md: "flex" }} align="center" gap={{ md: 2, lg: 4, xl: 6 }} ml={10}>
						<DesktopNav isScrolled={isScrolled} />
					</Flex>
				</Flex>
				<Flex flex={{ base: 1, md: "auto" }} mr={2} display={{ base: "flex", md: "none" }} justify={"flex-end"}>
					<IconButton
						onClick={() => setIsOpen(!isOpen)}
						icon={isOpen ? <GrClose /> : <Hamburger />}
						variant={"ghost"}
						aria-label="toggle nav"
						fontSize="xl"
					/>
				</Flex>
			</Flex>
			{/* <Slide in={isOpen} direction="right" style={slideStyle}> */}
			<MobileNav isScrolled={isScrolled} isOpen={isOpen} setIsOpen={setIsOpen} />
			{/* </Slide> */}
		</Box>
	);
};

export default Navbar;
