const oldInputLink = document.querySelector("input[old-input-link]");
const btnAdd = document.querySelector("button[add-link]");
const reloadAdd = document.querySelector("button[reload-link]");
const inputNewLink = document.querySelector("input[input-new-link]");

btnAdd.addEventListener("click", () => {
  // push link
  navigator.clipboard.readText().then(function (clipboardText) {
    oldInputLink.value = clipboardText;
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

    setTimeout(() => {
      oldInputLink.value = "";
      inputNewLink.value = "";
    }, 5000);
  }, 10);
});

reloadAdd.addEventListener("click", () => {
  // transform
  let link = oldInputLink.value.split("");
  const delLink = link.splice(8, 4, "d", "d");
  link = link.join("");

  // record new link
  inputNewLink.value = link;

  // copy new link
  navigator.clipboard.writeText(link);

  setTimeout(() => {
    oldInputLink.value = "";
    inputNewLink.value = "";
  }, 5000);
});
