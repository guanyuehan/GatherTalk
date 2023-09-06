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

    return threadDiv;
  }

  getJSON() {
    return {
      title: this.title,
      author: this.author,
      date: this.date,
      comments: this.comments.map((comment) => comment.getJSON()),
    };
  }
}

Thread.fromJSON = function (json) {
  const thread = new Thread(json.title, json.author, json.date);
  thread.comments = json.comments.map((comment) => Comment.fromJSON(comment));
  return thread;
};
