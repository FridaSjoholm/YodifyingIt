var headers = Array.from(document.querySelectorAll("h1, h2, h3"));
headers.forEach(function(title) {
  var oldtitle = title.innerHTML;
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://yoda.p.mashape.com/yoda?sentence="+oldtitle);
  oReq.setRequestHeader("X-Mashape-Key", /*YOUR API KEY*/);
  oReq.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  oReq.send();

  function reqListener () {
    title.innerHTML = this.responseText;
  }
});
