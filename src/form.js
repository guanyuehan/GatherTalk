const textInput = document.getElementById("comment-text-input");
const authorInput = document.getElementById("comment-author-input");

function addComment(event) {
  event.preventDefault();
  let commentText = textInput.value;
  let author = authorInput.value;
  refreshPage();

  if (commentText === "" || author === "") return;

  let date = new Date();
  const comment = new Comment(1, commentText, author, date, null);
  mainThread.addComment(comment);
  textInput.value = "";
  authorInput.value = "";
  refreshPage();
}
