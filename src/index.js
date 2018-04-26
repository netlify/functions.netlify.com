function once(node, type, callback) {
  const fn = () => {
    node.removeEventListener(type, fn);
    return callback();
  };
  node.addEventListener(type, fn);
}

function loadCode(href, container) {
  const pre = document.createElement("pre");
  pre.setAttribute("aria-live", "polite");
  pre.textContent = "Loading…";
  container.appendChild(pre);

  fetch(href)
    .then(response => response.text())
    .then(text => {
      const code = document.createElement("code");
      code.classList.add("language-js");
      code.textContent = text;
      Prism.highlightElement(code);
      pre.textContent = null;
      pre.appendChild(code);
    })
    .catch(error => {
      pre.innerHTML = `Uh-oh! Couldn’t load the code from <a href='${href}'>GitHub</a>.`;
    });
}

/* Load and render the code snippets */
document.querySelectorAll("[data-snippet]").forEach((el, index) => {
  const href = el.href
    .replace("github.com", "raw.githubusercontent.com")
    .replace("/tree/master/", "/master/");
  const id = el.dataset.snippet;
  const snippet = document.getElementById(id);
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  summary.textContent = "See the code";
  details.appendChild(summary);
  once(details, "click", () => loadCode(href, details));
  snippet.appendChild(details);
});
