const oldInputLink = document.querySelector("input[old-input-link]");
const btnClean = document.querySelector("button[clean-link]");
const btnAdd = document.querySelector("button[add-link]");
const btnReload = document.querySelector("button[reload-link]");
const inputNewLink = document.querySelector("input[input-new-link]");

btnClean.addEventListener("click", () => {
  // clean input
  oldInputLink.value = "";
  inputNewLink.value = "";
});

btnAdd.addEventListener("click", () => {
  // push link
  navigator.clipboard.readText().then(function (clipboardText) {
    oldInputLink.value = clipboardText;
  });

  setTimeout(() => {
    transformLink();
  }, 10);
});

btnReload.addEventListener("click", () => {
  transformLink();
});

const transformLink = () => {
  // link verification
  let verificationLink = oldInputLink.value.split("");
  const delverificationLink = verificationLink.splice(21);
  verificationLink = verificationLink.join("");
  switch (verificationLink) {
    case "https://www.instagram":
      break;

    case "https://ddinstagram.c":
      return (oldInputLink.value = "Посилання вже було трансформовано!");

    default:
      return (oldInputLink.value = "Це не посилання з Instagram!");
  }

  // transform
  let link = oldInputLink.value.split("");
  const delLink = link.splice(8, 4, "d", "d");
  link = link.join("");

  // record new link
  inputNewLink.value = link;

  // copy new link
  navigator.clipboard.writeText(link);
};
