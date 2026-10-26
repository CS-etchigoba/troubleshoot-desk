// Load previously resolved guide IDs.
function loadResolvedIds() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("troubleshootDesk.resolvedIds") || "[]"
    );

    return new Set(
      Array.isArray(saved) ? saved.filter(Number.isInteger) : []
    );
  } catch {
    return new Set();
  }
}

const resolvedIds = loadResolvedIds();

// Save the current resolved guide IDs.
function saveResolvedIds() {
  try {
    localStorage.setItem(
      "troubleshootDesk.resolvedIds",
      JSON.stringify([...resolvedIds])
    );

    return true;
  } catch {
    return false;
  }
}

// Find the HTML elements we need.
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const statusFilter = document.getElementById("status-filter");
const casesContainer = document.getElementById("cases-container");
const resultsCount = document.getElementById("results-count");

// Create a heading followed by a list.
function createListSection(heading, items, ordered = false) {
  const section = document.createElement("section");

  const title = document.createElement("h4");
  title.textContent = heading;

  // Steps use a numbered list. Symptoms use bullet points.
  const list = document.createElement(ordered ? "ol" : "ul");

  items.forEach(function (item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  section.append(title, list);
  return section;
}

// Display a collection of troubleshooting guides.
function displayCases(cases) {
  // Clear the previous results.
  casesContainer.replaceChildren();

  const guideWord = cases.length === 1 ? "guide" : "guides";
  resultsCount.textContent = `${cases.length} ${guideWord} found.`;

  if (cases.length === 0) {
    const message = document.createElement("p");
    message.textContent =
      "No matching guides. Try another search, category, or resolution status.";

    casesContainer.appendChild(message);
    return;
  }

  cases.forEach(function (guide) {
    const card = document.createElement("article");
    card.className = "case-card";

    const category = document.createElement("p");
    category.className = "case-category";
    category.textContent = guide.category;

    const title = document.createElement("h3");
    title.textContent = guide.title;

    const description = document.createElement("p");
    description.textContent = guide.description;

    // A details element provides a built-in expandable section.
    const details = document.createElement("details");

    const summary = document.createElement("summary");
    summary.textContent = "View troubleshooting guide";

    const symptoms = createListSection("Symptoms", guide.symptoms);
    const steps = createListSection("Diagnostic steps", guide.steps, true);

    const resolutionHeading = document.createElement("h4");
    resolutionHeading.textContent = "Resolution and verification";

    const resolution = document.createElement("p");
    resolution.textContent = guide.resolution;

    details.append(
      summary,
      symptoms,
      steps,
      resolutionHeading,
      resolution
    );

const resolveButton = document.createElement("button");
resolveButton.type = "button";
resolveButton.className = "resolve-button";

const saveMessage = document.createElement("p");
saveMessage.className = "save-message";
saveMessage.setAttribute("role", "status");

// Make the card and button match the guide's current status.
function updateResolvedAppearance() {
  const isResolved = resolvedIds.has(guide.id);

  card.classList.toggle("is-resolved", isResolved);
  resolveButton.setAttribute("aria-pressed", String(isResolved));

  resolveButton.textContent = isResolved
    ? "Resolved ✓ — Mark unresolved"
    : "Mark as resolved";
}

resolveButton.addEventListener("click", function () {
  if (resolvedIds.has(guide.id)) {
    resolvedIds.delete(guide.id);
  } else {
    resolvedIds.add(guide.id);
  }

  const saved = saveResolvedIds();

  updateResolvedAppearance();

  // Refresh filtered results after a status change.
  // Keep the current card visible if saving failed so its warning remains readable.
  if (saved && statusFilter.value !== "all") {
    filterCases();
  }

  saveMessage.textContent = saved
    ? ""
    : "Status changed, but browser storage is unavailable. It may reset after refreshing.";
});

updateResolvedAppearance();

card.append(
  category,
  title,
  description,
  details,
  resolveButton,
  saveMessage
);
    casesContainer.appendChild(card);
  });
}

// Find guides matching BOTH the search text and selected category.
function filterCases() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedStatus = statusFilter.value;

  const matchingCases = troubleshootingCases.filter(function (guide) {
    const searchableText = [
      guide.title,
      guide.category,
      guide.description,
      ...guide.symptoms,
      ...guide.steps,
      guide.resolution,
      ...guide.keywords
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      guide.category === selectedCategory;

    const isResolved = resolvedIds.has(guide.id);

    const matchesStatus =
      selectedStatus === "all" ||
      (selectedStatus === "resolved" && isResolved) ||
      (selectedStatus === "unresolved" && !isResolved);

    return matchesSearch && matchesCategory && matchesStatus;
  });

  displayCases(matchingCases);
}

// Update results when the user types or chooses a category.
searchInput.addEventListener("input", filterCases);
categoryFilter.addEventListener("change", filterCases);
statusFilter.addEventListener("change", filterCases);
// Display the initial results.
filterCases();