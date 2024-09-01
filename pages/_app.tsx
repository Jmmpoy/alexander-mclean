import { Layout } from "@/components/layout";
import SmoothScrolling from "@/components/smoothScrolling";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SmoothScrolling>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SmoothScrolling>
  );
}
