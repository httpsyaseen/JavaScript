import { TIMEOUT } from "./config";

function timeout(time) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error("Request took too much time"));
    }, 1000 * time);
  });
}

export const getJSON = async function (url) {
  try {
    const response = await Promise.race([fetch(url), timeout(TIMEOUT)]);
    const data = await response.json();
    console.log(data);
    if (!response.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};
