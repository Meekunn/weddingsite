"use client";
import { ChakraProvider } from "@chakra-ui/react";
// import { Poppins, Love_Light } from "next/font/google";
import theme from "../theme";
import "@fontsource/cormorant-upright/500.css";
import "@fontsource/love-light";
import "@fontsource/poppins";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* <style jsx global>
                {`
                    :root {
                        

                       
                    }
                `}
            </style> */}
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </>
    );
}

// --font-cormorant_upright: ${cormorant_upright.style.fontFamily};
//  --font-love_light: ${love_light.style.fontFamily};
//--font-poppins: ${poppins.style.fontFamily};
