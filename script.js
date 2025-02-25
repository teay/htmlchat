const messages = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    const li = document.createElement('li');
    li.textContent = message;
    messages.appendChild(li);
    messageInput.value = '';
    messages.scrollTop = messages.scrollHeight; // เลื่อนไปข้อความล่าสุด
  }
});

messageInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});