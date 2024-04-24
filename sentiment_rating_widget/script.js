let selectedButton = null;

function selectButton(buttonIndex) {
    // Clear active class from all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Add active class to selected button
    const button = document.querySelector(`#buttons button:nth-child(${buttonIndex})`);
    button.classList.add('active');

    selectedButton = buttonIndex;

}


function submitVote() {
    if (selectedButton !== null) {

        // Reset selectedButton
        selectedButton = null;

        // Clear active class from all buttons
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.classList.remove('active');
        });

        alert('Vote submitted successfully!');
    } else {
        alert('Please select a button before submitting.');
    }
}

// Find all sentiment buttons and set up click event listeners
document.querySelectorAll('.sentiment-btn').forEach(button => {
    button.addEventListener('click', function() {
      selectedSentiment = this.getAttribute('data-sentiment');
    });
  });
  // Set up the submit button click event listener
  document.getElementById('submitBtn').addEventListener('click', function() {
    const responseElement = document.getElementById('response');
    let message = 'You haven’t selected anything yet.';
    // Customize the message based on the selected sentiment
    if (selectedSentiment === 'happy') {
      message = 'You selected happy, have a great day!';
    } else if (selectedSentiment === 'sad') {
      message = 'You selected sad, hope things get better!';
    } else if (selectedSentiment === 'neutral') {
      message = 'You selected neutral, thank you for your feedback.';
    }
    // Display the message
    responseElement.textContent = message;
  });
