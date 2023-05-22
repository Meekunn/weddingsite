import { Box, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { GiCutDiamond } from "react-icons/gi";
import proposalBg from "../../assets/proposal-background.png";
import flower2 from "../../assets/flower2.png";
import flowerPattern from "../../assets/design.svg";

const style = {
	backgroundImage: `url(${proposalBg.src})`,
	backgroundPosition: "center",
	backgroundSize: "cover",
};

const Proposal = () => {
	return (
		<Stack sx={style} p={8}>
			<Flex direction="column" gap={6} align="center" p={8}>
				<Box
					bg="#ffffff"
					borderRadius={"50%"}
					w="40px"
					h="40px"
					display="flex"
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Icon as={GiCutDiamond} w={8} h={8} color={"brand.300"} />
				</Box>
				<Flex direction={"column"} gap={2} pt={4} align={"center"}>
					<Heading as="h2" fontSize={"5xl"}>
						The Proposal
					</Heading>
					<Image src={flowerPattern.src} w="200px" />
				</Flex>
				<Flex direction={"column"} gap={8} w={"70%"}>
					<Text textAlign={"center"} fontSize={"xl"}>
						"I could walk forever and a mile with you. Would you like to walk with me?”
					</Text>
					<Text textAlign={"center"} fontStyle={"italic"} fontSize={"lg"}>
						-Mr. Romantic
					</Text>
				</Flex>
			</Flex>
			<Image src={flower2.src} position={"absolute"} bottom={0} left={0} />
		</Stack>
	);
};

export default Proposal;
