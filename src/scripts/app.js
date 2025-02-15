const mainOptionEl = document.getElementById("main-opiton");
const inputBoxEl = document.getElementById("search-quote");
const searchFormEl = document.getElementById("searchForm");
const errorMessageEl = document.getElementById("error-message");
const resultContainerEl = document.getElementById("result-container");

mainOptionEl.addEventListener("change", (e) => {
  const option = e.target.value;

  if (!option) {
    inputBoxEl.setAttribute("disabled", "");
    inputBoxEl.value = null;
    resultContainerEl.style.display = "none";
	errorMessageEl.style.display = "none"
  } else {
    inputBoxEl.removeAttribute("disabled");
  }
});

searchFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const searchQuote = formData.get("search-quote");

  function checkResult(id, title) {
    return (
      (mainOptionEl.value === "id" && +searchQuote === id) ||
      (mainOptionEl.value === "title" &&
        searchQuote.toLowerCase().trim() === title.toLowerCase())
    );
  }

  if (!inputBoxEl.value) {
    displayError("* Input box must not be empty!!");
  } else {
    if (checkResult(1, "It's okay")) {
      displayResult(
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "It's okay",
        "It's okay if you don't know what it will look like at the TOP. Take it ONE STEP at a time."
      );
    } else if (checkResult(2, "Mind and Matter")) {
      displayResult(
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Mind and Matter",
        "It's okay if you don't know what it will look like at the TOP. Take it ONE STEP at a time."
      );
    } else if (checkResult(3, "Pay attention on your step")) {
      displayResult(
        "https://images.unsplash.com/photo-1525799215606-b78e3a3bf666?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Pay attention on your step",
        "It's okay if you don't know what it will look like at the TOP. Take it ONE STEP at a time."
      );
    } else {
      displayError("* Item not found!!");
    }
  }
});

function displayResult(img, title, description) {
  const resultImageEl = resultContainerEl.querySelector("#result-img");
  const resultTitleEl = resultContainerEl.querySelector("#result-title");
  const resultDescription = resultContainerEl.querySelector(
    "#result-description"
  );
  errorMessageEl.style.display = "none";
  resultContainerEl.style.display = "block";

  resultImageEl.src = img;
  resultTitleEl.innerText = title;
  resultDescription.innerText = description;
}

function displayError(message) {
  errorMessageEl.style.display = "block";
  errorMessageEl.innerText = message;
  resultContainerEl.style.display = "none";
}
