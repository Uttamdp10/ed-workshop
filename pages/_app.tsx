import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/Resources.css";
import type { AppProps } from "next/app";
import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react"; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider cssVarsRoot={undefined}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
