class Thread {
  constructor(text, author, date) {
    this.Content = text;
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

    const threadHeader = document.createElement("div");
    threadHeader.classList.add("thread-header");
    threadDiv.appendChild(threadHeader);

    //AUTHOR
    const threadAuthor = document.createElement("p");
    threadAuthor.innerText = `By: ${this.author}`;
    threadHeader.appendChild(threadAuthor);

    //DATE
    const threadDate = document.createElement("p");
    let timePassed = new Date().getTime() - this.date.getTime();
    timePassed = getTimePassed(timePassed);
    threadDate.innerText = `${timePassed}`;
    threadHeader.appendChild(threadDate);

    //Content
    const threadContent = document.createElement("p");
    threadContent.innerText = this.Content;
    threadContent.classList.add("thread-Content");
    threadDiv.appendChild(threadContent);

    //COMMENTS
    const threadComments = document.createElement("div");
    threadComments.classList.add("thread-comments");
    this.appendComments(threadComments);
    threadDiv.appendChild(threadComments);

    return threadDiv;
  }

  getJSON() {
    return {
      Content: this.Content,
      author: this.author,
      date: this.date,
      comments: this.comments.map((comment) => comment.getJSON()),
    };
  }
}

Thread.fromJSON = function (json) {
  const thread = new Thread(json.Content, json.author, new Date(json.date));
  thread.comments = json.comments.map((comment) => Comment.fromJSON(comment));
  return thread;
};

Thread.prototype.appendComments = function (commentDiv) {
  for (let comment of this.comments) {
    commentDiv.appendChild(comment.createElement());
  }
};
