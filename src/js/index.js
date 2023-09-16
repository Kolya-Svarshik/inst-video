const btnCopyAdd = document.querySelector("button[add-copy-link]");
const inputLink = document.querySelector("input[input-link]");
const btnAdd = document.querySelector("button[add-link]");
const oldLink = document.querySelector("span[old-link]");
const inputNewLink = document.querySelector("input[input-new-link]");
const newLink = document.querySelector("span[new-link]");

const exitLink = document.querySelector("input[exit-link]");
const btnCopy = document.querySelector("button[copy-link]");
//
inputLink.value =
  "https://www.instagram.com/reel/CtKxQDJgjeV/?igshid=MzRlODBiNWFlZA==";
//

let link = "";

btnAdd.addEventListener("click", () => {
  oldLink.textContent = inputLink.value;

  link = inputLink.value.split("");

  const delLink = link.splice(8, 4, "d", "d");

  link = link.join("");

  inputNewLink.value = link;
  newLink.textContent = link;
});

btnCopy.addEventListener("click", clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector("input[input-new-link]").value;
  await navigator.clipboard.writeText(text);
}
