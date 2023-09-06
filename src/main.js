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
  let text = `lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum`;

  mainThread = new Thread(text, "Tricia", new Date());
  mainThreadElement = mainThread.createElement();
}

chat.appendChild(mainThreadElement);
