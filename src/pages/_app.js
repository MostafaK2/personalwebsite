import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
    </NextUIProvider>
    );
}