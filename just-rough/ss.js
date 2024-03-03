var quoteDisplay = document.getElementById('quoteDisplay');
var quote = document.getElementById('quote');


function getRandomQuote() {
    fetch("quote.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const quote1 = data.quote;
            const randomIndex = Math.floor(Math.random() * quote1.length);
            const randomQuote = quote1[randomIndex];
            quoteDisplay.innerHTML = '';

            const jokeElement = document.createElement('p');
            jokeElement.textContent = `${randomQuote}`;
            quoteDisplay.append(jokeElement);
        })
        .catch(error => {
            console.error('Error:', error);
            quoteDisplay.textContent = "Failed to fetch a quote. Please try again later.";
        });
}
