document.addEventListener('DOMContentLoaded', function() {
  var doPageButton = document.getElementById('doPage');
  doPageButton.addEventListener('click', function() {
    console.log("you clicked tha button")
    chrome.tabs.executeScript({file: "script.js"});
  });
});
