# Daily Codeforces Challenge

This Chrome extension ensures you solve at least one Codeforces problem daily. If you haven't solved a problem today, it will redirect you to the Codeforces problemset page.

## Installation

1. Clone the repository to your local machine.
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" by toggling the switch in the top right corner.

4. Click on "Load unpacked" and select the directory where you cloned the repository.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.

2. Enter your Codeforces handle and click "Save".

3. The extension will now track your problem-solving activity on Codeforces.

## Development

### Prerequisites

- Node.js and npm installed on your machine.

### Running the Extension

1. Make your changes to the code.

2. Reload the extension in Chrome by navigating to `chrome://extensions/`, and clicking the reload icon on the extension card.

### Files

- `background.js`: Contains the background script that handles storage and tab updates.
- `content.js`: Sends a message to check if a problem is solved.
- `popup.js`: Handles the popup UI for setting the Codeforces handle.
- `manifest.json`: Defines the extension's metadata and permissions.
- `popup.html`: The HTML file for the popup UI.

## License

This project is licensed under the MIT License.