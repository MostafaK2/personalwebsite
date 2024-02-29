import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import "@/styles/globals.css";
import Footer from "@/components/Footer";


export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <Footer/>
    </NextUIProvider>
    );
}