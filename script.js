const button = document.getElementById('actionButton');
const message = document.getElementById('message');

button?.addEventListener('click', () => {
  message.textContent = 'The starter project is live. You can start building now.';
});
