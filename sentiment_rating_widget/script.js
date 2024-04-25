let selectedButtonIndex = null;

function selectButton(buttonIndex) {
    // Clear active class from all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Add active class to selected button
    const button = document.querySelector(`#buttons button:nth-child(${buttonIndex})`);
    button.classList.add('active');

    selectedButtonIndex = buttonIndex;
}

function submitVote() {
  const existingMessageElement = document.querySelector(".message");
  if (existingMessageElement) {
      existingMessageElement.remove();
  }

  const responseElement = document.createElement("p");
  responseElement.className = "message";
  let message = '';

  switch (selectedButtonIndex) {
    case 1:
      var popup = document.getElementById("myPopup2");
      popup.classList.toggle("show");
      break;
    case 2:
      var popup = document.getElementById("myPopup3");
      popup.classList.toggle("show");
      break;
    case 3:
      var popup = document.getElementById("myPopup4");
      popup.classList.toggle("show");
      break;
    case 4:
      var popup = document.getElementById("myPopup5");
      popup.classList.toggle("show");
      break;
    case 5:
      var popup = document.getElementById("myPopup6");
      popup.classList.toggle("show");
      break;
    default:
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
      break;
  }

  responseElement.textContent = message;

  document.body.appendChild(responseElement);

}


