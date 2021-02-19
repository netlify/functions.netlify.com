// Search scripts

// Hide items that don't match the criteria
function hideUnmatched({ items, field, emptyMessage }) {
  // Make sure everything is visible
  items.forEach((item) => {
    item.dataset.searchVisibility = "visible";
    item.removeAttribute("hidden");
  });

  // Make sure empty message is hidden
  emptyMessage.setAttribute("hidden", "");

  // Filter out the unmatched items
  const unmatchedItems = items.filter((item) => {
    return !item
      .querySelector(".card__title")
      .textContent.toLowerCase()
      .includes(field.value.toLowerCase());
  });

  // Hide the unmatched items
  unmatchedItems.forEach((item) => {
    item.dataset.searchVisibility = "hidden";
    item.setAttribute("hidden", "");
  });

  if (items.length === unmatchedItems.length) {
    emptyMessage.removeAttribute("hidden");
  }
}

// Append to example sections a count of items that are matching the search criteria
function appandItemSectionCount({ searchSection }) {
  searchSection.dataset.searchSectionCount = searchSection.querySelectorAll(
    "[data-search-visibility='visible']"
  ).length;
}

// Grab the form
const form = document.querySelector("[data-search]");

// Only execute if the form is there
if (form) {
  // Grab all elements needed
  const emptyMessage = document.querySelector("[data-search-empty-message]");
  const field = form.querySelector("input[type='search']");
  const searchSection = document.querySelector("[data-search-section]");
  const items = [...searchSection.querySelectorAll("[data-search-visibility]")];

  // Display search when js runs
  form.dataset.search = "enabled";

  // Listen for typing in the search field
  field.addEventListener("keyup", () => {
    hideUnmatched({ items, field, emptyMessage });
    appandItemSectionCount({ searchSection });
  });

  // Prevent enter from submitting the form
  field.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
}
