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
					<Text fontSize={"sm"}>
						"From the moment I met you, I knew that you were special. Your smile, your laugh, your kindness, and your compassion all drew me to you like a magnet. And as I got to know you better, I realized that you are not just a special person, but you are the person I want to spend the rest of my life with. You have brought so much joy into my life, and I want to share that joy with you forever.
						<br />
						I want to wake up every morning knowing that I am blessed to have you by my side.<br />
						I want to experience life's adventures with you,<br />
						explore the world with you,<br />
						build a family with you,<br />
						face life's challenges together,<br />
						triumph together,<br />
						support you in all your dreams and aspirations,<br />
						and create memories that will last a lifetime. <br />

All mentioned above could have been enough, then I remember the book of 1 Cor 13 made it clear that, if all do all, but I have not loved, it’s all void.
Hence, I want to love you with all my heart, every day for the rest of my life."
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
