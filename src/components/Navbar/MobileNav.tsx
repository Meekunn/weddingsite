import { Stack, Link, Flex, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import "./active_link.scss";
import React from "react";
import Image from "next/image";
import blackLogo from "@assets/black_logo.png";



function MobileNav({ isOpen, onToggle }: IMobileNavbar) {
  
	return (
		<Drawer
		  isOpen={isOpen}
		  placement='right'
		  onClose={onToggle}
		>
		  <DrawerOverlay />
		  <DrawerContent>
			<DrawerCloseButton />
			<DrawerHeader>
				<Image src={blackLogo} alt="Wedding Logo" />
			</DrawerHeader>
  
			<DrawerBody>
				<Stack h={"80%"} justifyContent="center" gap={6} pl={4}>
					<Link
						onClick={onToggle}
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
						onClick={onToggle}
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
						onClick={onToggle}
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
						onClick={onToggle}
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
						onClick={onToggle}
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
			</DrawerBody>
		  </DrawerContent>
		</Drawer>
	)
  }

  export default MobileNav;
  
