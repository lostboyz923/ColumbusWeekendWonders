// Get all elements with the custom-button class
const buttons = document.querySelectorAll('.btn-special');

// Iterate over each button
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.color = 'yellow';
  });

  button.addEventListener('mouseout', () => {
    button.style.color = ''; // Reset to default color
  });

  button.addEventListener('click', () => {
    // Get the text of the button
    const buttonText = button.innerText;

    // Implement logic for each button individually
    // Example: Redirect to different pages for each button
    switch (buttonText) {
      case 'Event Highlights':
        window.location.href = '../pages/event-highlights.html';
        break;
      case 'Community Spotlights':
        window.location.href = '../pages/community-spotlights.html';
        break;
      case 'Outdoor Adventures':
        window.location.href = '../pages/outdoor-adventures.html';
        break;
      case 'Cycling Routes':
        window.location.href = '../pages/cycling-routes.html';
        break;
      case 'Literary Routes':
        window.location.href = '../pages/literary-escapades.html';
        break;
      case 'Innovative Workshops':
        window.location.href = '../pages/innovative-workshops.html';
        break;
      case 'History Theology':
        console.log('Navigating to History and Theology Events page...')
        window.location.href = '../pages/history-theology.html';
        break;
      case 'Technology Events':
        window.location.href = '../pages/technology-events.html';
        break;
      default: 
        console.log('Unknown button clicked:', buttonText); 
    }
  });
});
