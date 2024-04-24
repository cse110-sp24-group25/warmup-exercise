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
