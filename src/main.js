const chat = document.getElementById("chat");

const saved = localStorage.getItem("mainThread");
let mainThread;
let mainThreadElement;
if (saved != null) {
  let json = JSON.parse(saved);
  mainThread = Thread.fromJSON(json);
  mainThreadElement = mainThread.createElement();
  loadPage();
} else {
  mainThread = new Thread("Main Thread", "Tricia", new Date());
  mainThreadElement = mainThread.createElement();
}

chat.appendChild(mainThreadElement);
