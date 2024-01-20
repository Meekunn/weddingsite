import { Box, Flex, Heading, Icon, Image as ChakraImage, Stack, Text } from "@chakra-ui/react";
import { GiCutDiamond } from "react-icons/gi";
import proposalBg from "../../assets/proposal-background.png";
import flower2 from "../../assets/flower2.png";
import flowerPattern from "../../assets/design.svg";
import ProposalImage from "@assets/COD_3616.jpeg";
import Image from "next/image";

const style = {
	backgroundImage: `url(${proposalBg.src})`,
	backgroundPosition: "center",
	backgroundSize: "cover",
};

const Proposal = () => {
	return (
		<Stack sx={style} p={8} position={"relative"}>
			<Flex direction="column" gap={6} align="center" p={8}>
				<Box bg="#ffffff" borderRadius={"50%"} w="40px" h="40px" display="flex" justifyContent={"center"} alignItems={"center"}>
					<Icon as={GiCutDiamond} w={8} h={8} color={"brand.300"} />
				</Box>
				<Flex direction={"column"} gap={2} pt={4} align={"center"}>
					<Heading as="h2" fontSize={"5xl"}>
						The Proposal
					</Heading>
					<ChakraImage src={flowerPattern.src} w="200px" />
				</Flex>
				<Box
					sx={{
						img: {
							borderRadius: "30px",
						}
					}}
				>
					<Image src={ProposalImage} alt={"Groom"} sizes="350px" />
				</Box>
				<Flex direction={"column"} gap={8} zIndex={10}>
					<Text fontSize={"md"}>
					"You are special. Your smile, kindness, and compassion drew me in. You're the one I want to spend my life with, sharing joy, adventures, and building a family. Together, we'll face challenges, triumph, and create lasting memories. I promise to love you wholeheartedly, every day till infinity"
					</Text>
					<Text textAlign="end" fontStyle={"italic"} fontSize={"lg"}>
						- Kolade
					</Text>
				</Flex>
			</Flex>
			<ChakraImage src={flower2.src} position={"absolute"} bottom={0} left={0} />
		</Stack>
	);
};

export default Proposal;
