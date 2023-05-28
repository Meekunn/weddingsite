import { Box, Flex, Heading, Text, Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";
import flowerPattern from "../../assets/design.svg";
import placeholder from "../../assets/placeholder.jpg";
import flower1 from "../../assets/flower.png";

const TheCouple = () => {
	return (
		<Flex id="couple" p={8} direction={"column"} gap={"4.5rem"} position={"relative"}>
			<Flex direction={"column"} gap={2} pt={4} align={"center"}>
				<Heading as="h2" fontSize={"5xl"}>
					The Couple
				</Heading>
				<ChakraImage src={flowerPattern.src} w="200px" />
			</Flex>
			<Flex justify={"center"} align="center">
				<Flex
					direction={{ base: "column", md: "row" }}
					gap={{ base: 10, xl: 24 }}
					justify={{ md: "space-around" }}
					w={{ lg: "75%" }}
				>
					<Flex direction="column" gap={6}>
						<Text color={"#edce6f"} fontSize={"xl"} letterSpacing="wide">
							"From that very first moment, we knew our connection was extraordinary, a love story meant to be cherished
							forever."
						</Text>
						<Box
							borderRadius="30px"
							width="350px"
							height="350px"
							position="relative"
							sx={{
								img: {
									borderRadius: "30px",
								},
							}}
						>
							<Image src={placeholder} alt={"Bride"} fill priority={true} placeholder="blur" />
						</Box>
						<Heading as="h3" fontSize={"3xl"}>
							Ayomikun Adeleye
						</Heading>
						<Text fontSize={"md"} letterSpacing={"wide"}>
							She&apos;s dedicated, dependable, elegant and perhaps a little too anxious. This isn&apos;t surprising
							considering for someone with her position.
						</Text>
					</Flex>
					<Flex direction="column" gap={4}>
						<Box
							borderRadius="30px"
							width="350px"
							height="350px"
							position="relative"
							sx={{
								img: {
									borderRadius: "30px",
								},
							}}
						>
							<Image src={placeholder} alt={"Bride"} fill priority={true} placeholder="blur" />
						</Box>
						<Heading as="h3" fontSize={"3xl"}>
							Kolade Adetoyinbo
						</Heading>
						<Text fontSize={"md"} letterSpacing={"wide"}>
							He&apos;s quick, responsible, affectionate and perhaps a little too bossy. Which isn&apos;t out of the
							ordinary for someone with his position.
						</Text>
					</Flex>
				</Flex>
				<ChakraImage
					src={flower1.src}
					position="absolute"
					bottom={0}
					right={0}
					display={{ base: "none", md: "block" }}
				/>
			</Flex>
		</Flex>
	);
};

export default TheCouple;
