function removeInviteLink() {
    
    // find the invite a friend element and delete it
    var elements = document.getElementsByClassName("text-invinite");
    while (elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

  }
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: removeInviteLink
    });
  });