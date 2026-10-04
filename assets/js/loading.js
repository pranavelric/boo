document.addEventListener('DOMContentLoaded', function () {
  const disableButton = document.getElementById('disable');
  const enableButton = document.getElementById('enable');

  function showClickableButton() {
    enableButton.classList.remove('hidden');
    disableButton.classList.add('hidden');
  }

  function navigateToSecondPage() {
    window.location.href = 'propose.html';
  }

  setTimeout(showClickableButton, 1800);
  enableButton.addEventListener('click', navigateToSecondPage);
});