import { Box, Heading, Stack, Text, Flex, Image } from "@chakra-ui/react";
import { GiSelfLove } from "react-icons/gi";
import { RiArrowDownSLine } from "react-icons/ri";
import { keyframes } from "@emotion/react";
import homeStyle from "./style";
import flowerPattern from "../../assets/light_flower_pattern.svg";

const HomeSection = () => {
	const nextSectionAnim = keyframes`
	from {
		transform: translate3d(0, 10px, 0);
	}
	to {
		transform: translate3d(0, -5px, 0);
	}`;

	const goToNext = () => {
		const nextSection = document.getElementById("how");
		if (nextSection) {
			nextSection.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<Box h="100vh" w={"100%"} sx={homeStyle} id="home">
			<Flex
				className="image.overlay"
				h="100vh"
				w={"100%"}
				backgroundColor="rgb(0 0 0 / 10%)"
				justify={"center"}
				align={"center"}
				color={"#fffdf9"}
				direction={"column"}
				gap={16}
				pt={14}
			>
				<Flex gap={4} direction={"column"} align={"center"}>
					<Heading as="h1" fontSize={{ base: "5xl", md: "6xl", xl: "7xl" }} letterSpacing={"wide"} textAlign={"center"}>
						Ayomikun & Kolade
					</Heading>
					<Image src={flowerPattern.src} w="250px" />
					<Text fontSize={"xl"}> are getting married on</Text>
					<Text fontSize={"xl"}>01.07.2023</Text>
				</Flex>
				<Stack
					fontSize={"2xl"}
					sx={{
						svg: {
							marginTop: "0 !important",
						},
					}}
					animation={`${nextSectionAnim} 2s 1.5s infinite alternate`}
					onClick={() => goToNext()}
				>
					<GiSelfLove />
					<RiArrowDownSLine />
				</Stack>
			</Flex>
		</Box>
	);
};

export default HomeSection;
