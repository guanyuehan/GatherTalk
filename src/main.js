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

function addComment() {
  let date = new Date();
  const comment = new Comment(1, "This is a comment", "Tricia", date, null);
  mainThread.addComment(comment);
  mainThreadElement.appendChild(comment.createElement());
}
