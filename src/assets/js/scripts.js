const form = document.querySelector("[data-search]");
const field = form.querySelector("input[type='search']");
const items = [...document.querySelectorAll("[data-search-visibility]")];

function hideUnmatched() {
  // Make sure everything is visible
  items.forEach(item => {
    item.dataset.searchVisibility = "visible";
    item.removeAttribute("hidden");
  });

  // Filter out the unmatched items
  const unmatchedItems = items.filter(item => {
    return !item
      .querySelector(".card__title")
      .textContent.toLowerCase()
      .includes(field.value.toLowerCase());
  });

  // Hide the unmatched items
  unmatchedItems.forEach(item => {
    item.dataset.searchVisibility = "hidden";
    item.setAttribute("hidden", "");
  });
}

// Display search when js runs
form.dataset.search = "enabled";

// Listen for typing in the search field
field.addEventListener("keyup", hideUnmatched);

// Prevent enter from submitting the form
field.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
