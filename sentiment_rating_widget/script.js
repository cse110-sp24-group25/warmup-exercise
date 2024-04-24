let selectedButtonIndex = null;

function selectButton(index) {
  selectedButtonIndex = index;
}

function submitVote() {

  const responseElement = document.createElement("p");
  responseElement.className = "message";
  let message = '';

  switch (selectedButtonIndex) {
    case 1:
      message = 'You selected angry. Oh no!';
      break;
    case 2:
      message = 'You selected upset. Take care!';
      break;
    case 3:
      message = 'You selected neutral. Thanks for participating!';
      break;
    case 4:
      message = 'You selected happy. Hope your day gets even better!';
      break;
    case 5:
      message = 'You selected supper happy. Hope you have more days like this!';
      break;
    default:
      message = 'Please select a sentiment before submitting.';
      break;
  }

  responseElement.textContent = message;

  document.body.appendChild(responseElement);
}
