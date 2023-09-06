class Comment {
  constructor(id, content, author, date) {
    this.id = id;
    this.content = content;
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
    const commentDate = document.createElement("p");
    let longAgo = new Date().getTime() - this.date.getTime();
    longAgo = getTimePassed(longAgo);
    commentDate.innerText = `${longAgo}`;
    commentHeader.appendChild(commentDate);

    //TEXT
    const contentDiv = document.createElement("p");
    contentDiv.innerText = this.content;
    contentDiv.classList.add("comment-text");
    commentDiv.appendChild(contentDiv);

    return commentDiv;
  }

  getJSON() {
    return {
      id: this.id,
      content: this.content,
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
  if (hours < 24) return `${hours.toFixed()}hrs ago`;

  let days = hours / 24;
  if (days < 7) return `${days.toFixed()}days ago`;

  let weeks = days / 7;
  if (weeks < 4) return `${weeks.toFixed()}wks ago`;

  let months = days / 30;
  if (months < 12) return `${months.toFixed()}mo ago`;

  let years = days / 365;
  return `${years.toFixed()}yrs ago`;
}

Comment.fromJSON = function (json) {
  const comment = new Comment(
    json.id,
    json.content,
    json.author,
    new Date(json.date)
  );
  return comment;
};
