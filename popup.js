document.addEventListener('DOMContentLoaded', () => {
    const handleInput = document.getElementById('handle-input');
    const saveButton = document.getElementById('save-button');
    const statusElement = document.getElementById('status');

    chrome.storage.sync.get('codeforcesHandle', (result) => {
        if (result.codeforcesHandle) {
            handleInput.value = result.codeforcesHandle;
        }
    });

    saveButton.addEventListener('click', () => {
        const handle = handleInput.value.trim();
        if (handle) {
            chrome.runtime.sendMessage({ action: 'setHandle', handle: handle });
            statusElement.textContent = 'Handle saved!';
        } else {
            statusElement.textContent = 'Please enter a valid handle.';
        }
    });
});