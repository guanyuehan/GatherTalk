function refreshPage() {
  mainThreadElement.innerHTML = mainThread.createElement().innerHTML;
  save();
}

function save() {
  let json = mainThread.getJSON();
  json = JSON.stringify(json);
  localStorage.setItem("mainThread", json);
}

function loadPage() {
  refreshPage();
}

function clearSaved() {
  localStorage.removeItem("mainThread");
  window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D');
}
