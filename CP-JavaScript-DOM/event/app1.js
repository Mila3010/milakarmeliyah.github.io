const form = document.querySelector("#form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");

// input.addEventListener("change", (e) => {
//   console.log("Nilai Berubah");
// });

// input.addEventListener("input", (e) => {
//   console.log("Nilai Berhasil diinput");
// });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const noteValue = input.value;
  const newList = document.createElement("li");
  newList.innerText = noteValue;
  list.append(newList);
  input.value = "";
});

list.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
  // console.dir(e.target);
});

// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", function () {
//     li.remove();
//   });
// }
