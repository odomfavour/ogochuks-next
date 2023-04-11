import Loader from "@/components/Loader";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
       {isLoading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}
