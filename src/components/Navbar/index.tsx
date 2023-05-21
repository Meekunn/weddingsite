import { useDisclosure, Box, Flex, IconButton, useBreakpointValue, Heading, Slide } from "@chakra-ui/react";
import Hamburger from "../Hamburger";
import { GrClose } from "react-icons/gr";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { slideStyle } from "./style";

const Navbar = () => {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Box position="fixed" w="100%" zIndex={"2000"}>
			<Flex
				bg="transparent"
				p={4}
				px={6}
				align={"center"}
				minH={"60px"}
				borderBottom={1}
				borderColor={"brand.100"}
				borderStyle={"solid"}
			>
				<Flex flex={{ base: 1 }} justify={{ base: "flex-start", md: "space-between" }} align="center">
					<Heading textAlign={useBreakpointValue({ base: "center", md: "left" })}>A&K</Heading>
					<Flex display={{ base: "none", md: "flex" }} align="center" gap={{ md: 2, lg: 4, xl: 6 }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>
				<Flex flex={{ base: 1, md: "auto" }} mr={2} display={{ base: "flex", md: "none" }} justify={"flex-end"}>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <GrClose /> : <Hamburger />}
						variant={"ghost"}
						aria-label="toggle nav"
						fontSize="xl"
					/>
				</Flex>
			</Flex>
			<Slide in={isOpen} direction="right" style={slideStyle}>
				<MobileNav />
			</Slide>
		</Box>
	);
};

export default Navbar;
