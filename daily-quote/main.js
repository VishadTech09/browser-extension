
fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
        if (data.length) {
            const quoteItem = data[Math.floor(Math.random() * data.length)];
            const textElement = document.getElementById("quoteText");
            const authorElement = document.getElementById("author");
            textElement.innerHTML = quoteItem.text;
            authorElement.innerText = quoteItem.author;
        }

    })
    .catch(error => {
        document.writeln("Error getting data...")
    })