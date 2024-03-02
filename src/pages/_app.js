import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";


export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </NextUIProvider>
    );
}