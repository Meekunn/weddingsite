"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Poppins, Cormorant_Upright, Love_Light } from "next/font/google";
import theme from "../theme";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const cormorant_upright = Cormorant_Upright({ weight: "500", subsets: ["latin"] });
const love_light = Love_Light({ weight: "400", subsets: ["latin"] });

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<style jsx global>
				{`
					:root {
						--font-poppins: ${poppins.style.fontFamily};
						--font-cormorant_upright: ${cormorant_upright.style.fontFamily};
						--font-love_light: ${love_light.style.fontFamily};
					}
				`}
			</style>
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</>
	);
}
