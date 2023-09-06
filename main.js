const chat = document.getElementById("chat");

const mainThread = new Thread("Main Thread", "Tricia", new Date());
const mainThreadElement = mainThread.createElement();
chat.appendChild(mainThreadElement);

function addComment() {
  let date = new Date();
  const comment = new Comment(1, "This is a comment", "Tricia", date, null);
  mainThread.addComment(comment);
  mainThreadElement.appendChild(comment.createElement());
}

function refreshPage() {
  console.log(mainThread);
  console.log(mainThread.comments);
  mainThreadElement.innerHTML = "";
  for (let comment of mainThread.comments) {
    mainThreadElement.appendChild(comment.createElement());
  }
}
