# Troubleshoot Desk
[Live Demo](https://cs-etchigoba.github.io/troubleshoot-desk/)

A browser-based IT troubleshooting assistant that helps users find
guides for common hardware, software, networking, and licensing problems.

I built this personal project to connect my IT support experience with
web development and practice organizing troubleshooting information into
a searchable interface.

## Features

- Search guides by title, symptoms, diagnostic steps, and keywords.
- Filter by category and resolution status.
- Expand guides to view symptoms, diagnostic steps, and verification advice.
- Mark guides as resolved or unresolved.
- Preserve resolution status between visits using browser localStorage.
- Use the application on desktop and mobile screen sizes.

## Technologies

- HTML — page structure and accessible form controls
- CSS — styling, grid layout, and responsive design
- JavaScript — guide rendering, search, filtering, and event handling
- localStorage — browser-based storage for resolution status

## Running the Project

1. Download or clone this repository.
2. Open index.html in a web browser.

No package installation or build step is required.

To edit the project, open its folder in VS Code.

## Project Files

| File | Purpose |
| --- | --- |
| index.html | Page structure, search field, and filter controls |
| styles.css | Styling and responsive layouts |
| cases.js | Sample troubleshooting guide data |
| script.js | Rendering, search, filters, and saved resolution status |

## How It Works

Troubleshooting guides are stored as JavaScript objects in an array.
Each guide includes a unique ID, category, description, symptoms,
diagnostic steps, resolution advice, and search keywords.

When a user types or changes a filter, the application selects guides
that match all active conditions and renders them on the page.

Resolved guide IDs are tracked in a Set to prevent duplicates. They are
converted to JSON for localStorage and loaded when the page opens.

Guide content is inserted using textContent rather than interpreted
as HTML.

## Limitations

- Guides are fictional educational examples, not an organization's
  internal support documentation.
- Search uses text matching; it does not use AI or understand natural language.
- Resolution status belongs to this browser and page address. It does
  not synchronize between devices or users.
- Clearing browser storage removes saved resolution status.
- Storage behavior for pages opened directly through file URLs can
  vary by browser.
- A resolved label records the user's selection; it does not verify
  that a technical problem has been fixed.

## Future Improvements

- Add more troubleshooting guides.
- Track completion of individual diagnostic steps.
- Allow users to create and edit their own cases.
- Add automated checks for search and filtering behavior.

## Author

Everlast Chigoba

GitHub: https://github.com/CS-etchigoba