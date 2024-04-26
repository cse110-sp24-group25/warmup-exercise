let selectedButtonIndex = null;
let submissionCount = {};

for (let i = 1; i <= 5; i++) {
  submissionCount[i] = 0;
}

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

  submissionCount[selectedButtonIndex]++;

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
      message = 'You selected overjoyed. Hope you have more days like this!';
      break;
    default:
      message = 'Please select a sentiment before submitting.';
      break;
  }

  responseElement.textContent = message;

  document.body.appendChild(responseElement);

  console.log("Submission Count:", "| Angry:",submissionCount[1],
      "| Upset",submissionCount[2],
      "| Neutral",submissionCount[3],
      "| Happy",submissionCount[4],
      "| Overjoyed",submissionCount[5], "|"
    );

}