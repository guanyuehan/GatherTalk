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
}
