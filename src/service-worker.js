/**
 *
 *
 */
self.addEventListener("install", (event) => {
  console.log("sw: ", event);
});
/**
 *
 */
self.addEventListener("sync", (event) => {
  console.log("sync: ", event);
});
