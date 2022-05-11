const readySW = async () => {
  const serviceWorker = navigator.serviceWorker.ready;
  const clientID = await serviceWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      "BKW4d3HuSrxPkORbqrPtVfJH6MLXsXZvUproxKUd61knDsTrJ1EW9eZHVdIJffDvGS0-OAVkBjOKBYzd3xUJdqM"
    ),
  });
  console.log(clientID);
  console.log(JSON.stringify(clientID));
};
const startSW = () => {
  window.addEventListener("load", async () => {
    const sW = await navigator.serviceWorker.register("/sw.js");
    console.log("SW registered: ", sW);
    readySW();
  });
};
export default startSW;
