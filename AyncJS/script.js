// console.log("Test Start");

// setTimeout(() => {
//   console.log("o sec timer");
// }, 0);

// Promise.resolve("Promise is resolved 1").then((res) => console.log(res));
// Promise.resolve("Promise is resolved 2").then((res) => {
//   for (let index = 0; index < 100000; index++) {}
//   console.log(res);
// });

// console.log("Test End");

src = "https://picsum.photos/500/600";

function createImage(source) {
  return new Promise((resolve, reject) => {
    const pic = document.createElement("img");
    pic.src = source;
    pic.addEventListener("load", () => {
      const main = document.querySelector(".container");
      main.append(pic);
      resolve(pic);
    });

    pic.addEventListener("error", () =>
      reject(new Error("Error Loaidng the Image"))
    );
  });
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("time passed"), 1000 * time);
  });
}

createImage(src)
  .then((img) => {
    let = currentImg = img;
    return wait(2);
  })
  .then(() => {
    createImage("https://picsum.photos/700/800");
  })
  .then(() => (currentImg.style.display = "none"));
