
    const quoteContainer = document.getElementById('quote-text');
    const generateButton = document.getElementById('generate-button');

    // Disable the button while fetching the quote
    generateButton.addEventListener("click", fetchRandomQuote);


    // Function to fetch a random quote from the JSON file
    function fetchRandomQuote() {
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
                quoteContainer.textContent = `${randomQuote.text} - ${randomQuote.author}`;
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

    // Add event listener to the generate button
   
    // Fetch a random quote initially when the page loads
    fetchRandomQuote();
