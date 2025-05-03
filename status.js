document.addEventListener('DOMContentLoaded', () => {
    const statusElement = document.getElementById('user-status');
    const loggedIn = localStorage.getItem('vestfund_logged_in') === 'true';
    const name = localStorage.getItem('vestfund_name');
  
    if (loggedIn && name) {
      statusElement.textContent = `Hello, ${name}`;
    } else if (loggedIn) {
      statusElement.textContent = `Logged in`;
    } else {
      statusElement.textContent = `Not currently logged in`;
    }
  });
  