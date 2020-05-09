const batch = 394; // change to your own batch id
const baseUrl = `https://wagon-chat.herokuapp.com/${batch}/messages`;

// Your turn to code!

const send = document.querySelector('.chat-input');
// const refresh = document.querySelector("#refresh");
const inputMessage = document.querySelector('#your-message');
const inputName = document.querySelector('#your-name');
const list = document.querySelector('.list-unstyled');


const fetchMessages = () => {
  fetch(baseUrl)
    .then(response => response.json())
    .then((data) => {
      data.messages.forEach((message) => {
        console.log(message);
        const sendMessage = `<li>${message.content}(<span class="date">10 minutes ago</span>) by ${message.author}</li>`;
        list.insertAdjacentHTML("beforeend", sendMessage);
      });
    });
};


const sendNewMessage = () => {
  const message = { author: inputName.value, content: inputMessage.value };
  fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(message)
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
};

// const input = document.querySelector("#refresh");
// input.addEventListener("click", fetchMessages);
// send.addEventListener("click", (event) => {
//   event.preventDefault();
//   sendNewMessage();
//   fetchMessages(send);
// });
