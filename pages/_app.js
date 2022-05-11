import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("load", async () => {
      const sW = await navigator.serviceWorker.register("../sw.js");
      console.log("SW registered: ", sW);
      const serviceWorker = await navigator.serviceWorker.ready;
      const clientID = await serviceWorker?.pushManager?.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
          "BKW4d3HuSrxPkORbqrPtVfJH6MLXsXZvUproxKUd61knDsTrJ1EW9eZHVdIJffDvGS0-OAVkBjOKBYzd3xUJdqM",
      });
      console.log(clientID);
      console.log(JSON.stringify(clientID));
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
