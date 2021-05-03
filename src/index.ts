import fetch from "node-fetch";

(async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("fetch completed!");
  }
})("https://jsonplaceholder.typicode.com/todos/1");
