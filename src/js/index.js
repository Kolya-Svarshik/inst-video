const oldInputLink = document.querySelector("input[old-input-link]");
const btnClean = document.querySelector("button[clean-link]");
const btnAdd = document.querySelector("button[add-link]");
const btnReload = document.querySelector("button[reload-link]");
const inputNewLink = document.querySelector("input[input-new-link]");

btnAdd.addEventListener("click", () => {
  // push link
  navigator.clipboard.readText().then(function (clipboardText) {
    oldInputLink.value = clipboardText;
  });

  btnClean.addEventListener("click", () => {
    // clean input
    oldInputLink.value = "";
    inputNewLink.value = "";
  });

  setTimeout(() => {
    // transform
    let link = oldInputLink.value.split("");
    const delLink = link.splice(8, 4, "d", "d");
    link = link.join("");

    // record new link
    inputNewLink.value = link;

    // copy new link
    navigator.clipboard.writeText(link);
  }, 10);
});

btnReload.addEventListener("click", () => {
  // transform
  let link = oldInputLink.value.split("");
  const delLink = link.splice(8, 4, "d", "d");
  link = link.join("");

  // record new link
  inputNewLink.value = link;

  // copy new link
  navigator.clipboard.writeText(link);
});
