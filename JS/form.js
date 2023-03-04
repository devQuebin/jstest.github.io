console.log("test");

const $form = document.querySelector("#form");
const $buttonMailTo = document.querySelector("#sendmail");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  console.log(form.get("email"));

  $buttonMailTo.setAttribute(
    "href",
    `mailto:matsuda.m.kevin@gmail.com?subject=${form.get("name")} ${form.get(
      "email"
    )}&body=${form.get("mensaje")}`
  );
  $buttonMailTo.click();
}
