class Thread {
  constructor(text, author, date) {
    this.title = "";
    this.author = author;
    this.date = date;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  createElement() {
    const threadDiv = document.createElement("div");
    threadDiv.classList.add("thread");
  }
}
