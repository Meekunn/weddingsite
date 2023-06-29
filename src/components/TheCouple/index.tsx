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
							"Love is a beautiful thing"
						</Text>
						<Text fontSize={"md"} letterSpacing={"wide"}>
							1 Cor 13:13<br />
							<br />
							And now these three remain: faith, hope and love. But the greatest of these is love.
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
						My Sweet sweet Akolade… Olowo Ori mi …My Everything wrapped in One Being.<br />
						Thank you for being a home that makes me feel comfortable, safe , happy, lots of Laughters. You are so loving, dependable, caring, thoughtful, best friend, My big-headed sugar zaddy….. At every Seasons ahead, I would choose you over and over again, God by our side.
						<br/>I love you so much ( more than chocolate ice cream)🤍
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default TheCouple;
