"use client"
import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import blackLogo from "../../assets/black_logo.png";
import whiteLogo from "../../assets/white_logo.png";
import Hamburger from "../Hamburger";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const [headerOutOfView, setHeaderOutOfView] = useState(false);
    const [isScrollUp, setIsScrollUp] = useState(true);
    const lastScrollY = useRef(0);

    const scrolledFunc = useCallback(() => {
        if (headerOutOfView) {
        const scrollY = window.scrollY;
        if (scrollY < 150) return setIsScrollUp(true);

        if (scrollY < lastScrollY.current) {
            if (!isScrollUp) setIsScrollUp(true);
        } else {
            if (isScrollUp) setIsScrollUp(false);
        }
        lastScrollY.current = scrollY <= 0 ? 0 : scrollY;
        }
    }, [headerOutOfView, isScrollUp]);

    useEffect(() => {
        lastScrollY.current = window.scrollY;
        window.addEventListener('scroll', scrolledFunc);
        return () => {
        window.removeEventListener('scroll', scrolledFunc);
        };
    }, [scrolledFunc]);

    useEffect(() => {
    const headerObserver = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return setHeaderOutOfView(true);
            setHeaderOutOfView(false);
        });
        },
        { rootMargin: '-150px 0px 0px 0px' }
    );
    const target = document.getElementById('home');
    if (target) {
        headerObserver.observe(target);
    }
    return () => {
        if (target) headerObserver.unobserve(target);
    };
    }, []);

    return (
        <Box position="fixed" zIndex={1000} w="100%">
            <Flex
                p={4}
                px={6}
                align={"center"}
                minH={"60px"}
                borderBottom={1}
                borderColor={headerOutOfView ? "brand.100" : "transparent"}
                borderStyle={"solid"}
                bg={headerOutOfView ? "#fffdf9" : "transparent"}
                
            >
                <Flex flex={{ base: 1 }} justify={{ base: "flex-start", md: "space-between" }} align="center">
                    <Image src={headerOutOfView ? blackLogo : whiteLogo} height={headerOutOfView ? 50 : 60} alt="Wedding Logo" />
                    <Flex display={{ base: "none", md: "flex" }} align="center" gap={{ md: 2, lg: 4, xl: 6 }} ml={10}>
                        <DesktopNav headerOutOfView={headerOutOfView} />
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
            <MobileNav {...{ isOpen, onToggle }} />
        </Box>
    );
};

export default Navbar;
