import { Box, Flex, Heading, Text, Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";
import flowerPattern from "../../assets/design.svg";
import bride from "@assets/COD_3608.jpg";
import groom from "@assets/COD_3603.jpg";
import flower1 from "@assets/flower.png";

const TheCouple = () => {
	return (
		<Flex id="couple" p={8} direction={"column"} position="relative" gap={"4.5rem"}
			sx={{
				_after: {
					content: "''",
					bgImage: `url(${flower1.src})`,
					bgRepeat: "no-repeat",
					bgSize: "cover",
					bgPosition: "center",
					position: "absolute",
					height: flower1.height,
					width: flower1.width,
					right: 0,
					bottom: 0,
				}
			}}
		>
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
							"From that very first moment, we knew our connection was extraordinary, a love story meant to be cherished forever."
						</Text>
						<Box
							sx={{
								img: {
									borderRadius: "30px",
								},
							}}
						>
							<Image src={bride} alt={"Bride"} sizes="350px" />
						</Box>
						<Heading as="h3" fontSize={"3xl"}>
							Ayomikun Adeleye
						</Heading>
						<Text fontSize={"md"} letterSpacing={"wide"}>
							She's dedicated, dependable, elegant, ambitious and a true believer. I call her my sweet Baby Girl, My Olori Laafin Kolade, My heartbeat, My best friend.<br />
							.<br />
							.<br />
							wait... all that no complete if i no mention say, she dey get coconut head sometimes sha 😂.<br />
							I love you so much my darling, and I am exicted to be taking this next step with you.
						</Text>
					</Flex>
					<Flex direction="column" gap={4} zIndex={10}>
						<Box
							sx={{
								img: {
									borderRadius: "30px",
								},
							}}
						>
							<Image src={groom} alt={"Groom"} sizes="350px" />
						</Box>
						<Heading as="h3" fontSize={"3xl"}>
							Kolade Adetoyinbo
						</Heading>
						<Text fontSize={"md"} letterSpacing={"wide"}>
							He&apos;s quick, responsible, affectionate and perhaps a little too bossy. Which isn&apos;t out of the ordinary for
							someone with his position.
						</Text>
					</Flex>
				</Flex>
				{/* <ChakraImage src={flower1.src} position="absolute" bottom={0} right={0} /> */}
			</Flex>
		</Flex>
	);
};

export default TheCouple;
