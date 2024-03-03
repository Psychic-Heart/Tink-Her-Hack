// Function to generate a random quote
function generateRandomQuote() {
    const quoteContainer = document.getElementById('quote-text');
    const generateButton = document.getElementById('generate-button');
    generate-button.addEventListener('click', generateRandomQuote);
    // Disable the button while fetching the quote
    generateButton.disabled = true;

    // Read quotes from the JSON file
    fetch('./quote.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const quotes = data.quotes;
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            quoteContainer.textContent = randomQuote;
        })
        .catch(error => {
            console.error('Error fetching quotes:', error);
            quoteContainer.textContent = 'Failed to fetch quotes';
        })
        .finally(() => {
            // Re-enable the button after fetching the quote
            generateButton.disabled = false;
        });
}

// Generate a quote when the page loads
generateRandomQuote();

// Add click event listener to the generate button

