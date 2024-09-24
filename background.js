let lastSolvedDate = null;
let codeforcesHandle = null;

chrome.storage.sync.get(['lastSolvedDate', 'codeforcesHandle'], (result) => {
    lastSolvedDate = result.lastSolvedDate;
    codeforcesHandle = result.codeforcesHandle;
});

function checkProblemSolved() {
    if (!codeforcesHandle) return;

    const today = new Date().toDateString();
    if (lastSolvedDate === today) return;

    fetch(`https://codeforces.com/api/user.status?handle=${codeforcesHandle}&from=1&count=10`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                const recentSubmission = data.result[0];
                const submissionDate = new Date(recentSubmission.creationTimeSeconds * 1000).toDateString();

                if (submissionDate === today && recentSubmission.verdict === 'OK') {
                    lastSolvedDate = today;
                    chrome.storage.sync.set({ lastSolvedDate: today });
                }
            }
        });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url && !tab.url.includes('codeforces.com')) {
        checkProblemSolved();
        if (lastSolvedDate !== new Date().toDateString()) {
            chrome.tabs.update(tabId, { url: 'https://codeforces.com/problemset' });
        }
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'setHandle') {
        codeforcesHandle = request.handle;
        chrome.storage.sync.set({ codeforcesHandle: request.handle });
        checkProblemSolved();
    }
});