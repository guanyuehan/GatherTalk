class Comment {
  constructor(id, text, author, date, replies) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.date = date;
    this.replies = replies;
  }

  createElement() {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.id = this.id;

    //TEXT
    const commentText = document.createElement("p");
    commentText.innerHTML = this.text;
    commentDiv.appendChild(commentText);

    //AUTHOR
    const commentAuthor = document.createElement("p");
    commentAuthor.innerHTML = this.author;
    commentDiv.appendChild(commentAuthor);

    //DATE
    const commentDate = document.createElement("p");
    commentDate.innerHTML = this.date;
    commentDiv.appendChild(commentDate);

    return commentDiv;
  }
}
