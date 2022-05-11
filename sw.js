self.addEventListener("push", (e) => {
  const config = {
    body: "Push Notification",
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3",
    },
  };
  e.waitUntil(self.registration.showNotification("Hello World!", config));
});
