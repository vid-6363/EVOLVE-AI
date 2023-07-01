const chatIcon = document.querySelector('.chat-icon');
const chatWindow = document.querySelector('.chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');

chatIcon.addEventListener('click', toggleChatWindow);
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function toggleChatWindow() {
  chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
  const message = userInput.value.trim();

  if (message !== '') {
    const userMessageElement = createMessageElement(message, 'user');
    chatMessages.appendChild(userMessageElement);
    scrollToBottom();

    // Simulate bot response
    setTimeout(function () {
      const botMessage = 'Hi I AM FROM ANANDOTSAVA. HOW CAN I HELP YOU ?';
      const botMessageElement = createMessageElement(botMessage, 'bot');
      chatMessages.appendChild(botMessageElement);
      scrollToBottom();
    }, 500);

    userInput.value = '';
  }
}

function createMessageElement(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent = message;
  return messageElement;
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}