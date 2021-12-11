
// when a new tab is opened
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["./foreground.js"]
    });
  }
});

// if you click the button (should never be necessary)
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["./foreground.js"]
  });
});