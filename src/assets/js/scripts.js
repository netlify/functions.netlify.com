const field = document.querySelector("#search");
const resultsList = document.querySelector("#list");
const items = [...resultsList.children];

function hideUnmatched() {
  // Make sure everything is visible
  items.forEach(item => item.removeAttribute("style"));

  // Filter out the unmatched items
  const unmatchedItems = items.filter(item => {
    return !item
      .querySelector(".card__title")
      .textContent.toLowerCase()
      .includes(field.value.toLowerCase());
  });

  // Hide the unmatched items
  unmatchedItems.forEach(item => (item.style.display = "none"));
}

// Listen for typing in the search field
field.addEventListener("keyup", hideUnmatched);

// Prevent enter from submitting the form
field.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
