class Comment {
  constructor(id, text, author, date) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.date = date;
  }

  createElement() {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.id = this.id;

    const commentHeader = document.createElement("div");
    commentHeader.classList.add("comment-header");
    commentDiv.appendChild(commentHeader);

    //AUTHOR
    const commentAuthor = document.createElement("p");
    commentAuthor.innerText = `By: ${this.author}`;
    commentHeader.appendChild(commentAuthor);

    //DATE

    //TODO: Make this a date object
    const commentDate = document.createElement("p");
    let longAgo = new Date().getTime() - this.date.getTime();
    longAgo = getTimePassed(longAgo);
    commentDate.innerText = `${longAgo}`;
    commentHeader.appendChild(commentDate);

    //TEXT
    const commentText = document.createElement("p");
    commentText.innerText = this.text;
    commentText.classList.add("comment-text");
    commentDiv.appendChild(commentText);

    return commentDiv;
  }

  getJSON() {
    return {
      id: this.id,
      text: this.text,
      author: this.author,
      date: this.date,
    };
  }
}

function getTimePassed(ms) {
  let seconds = ms / 1000;

  if (seconds < 60) return `${seconds.toFixed()}s ago`;

  let minutes = seconds / 60;
  if (minutes < 60) return `${minutes.toFixed()}min ago`;

  let hours = minutes / 60;
  if (hours < 24) return `${hours.toFixed()}h ago`;
  return;
}

Comment.fromJSON = function (json) {
  const comment = new Comment(
    json.id,
    json.text,
    json.author,
    new Date(json.date)
  );
  return comment;
};
