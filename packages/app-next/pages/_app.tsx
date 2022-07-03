import "../styles/globals.css";
import type { AppProps } from "next/app";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "./api/trpc/[trpc]";
import superjson from "superjson";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

const getBaseUrl = () => {
  if (process.browser) return "";
  if (process.env.NEXT_PUBLIC_VERCEL_URL)
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);
