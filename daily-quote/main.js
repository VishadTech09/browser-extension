


//"https://type.fit/api/quotes"
fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {


        const textElement = document.getElementById("quoteText");
        const tagsElement = document.getElementById("tags");
        const authorElement = document.getElementById("author");
        const authorPicElement = document.getElementById("authorImg");
        const fileContentElement = document.getElementById("filecontent");

        textElement.innerHTML = data.content;
        authorElement.innerText = data.author;
        tagsElement.innerText = data.tags.join(",")
        const imgUrl = `https://images.quotable.dev/profile/400/${data.authorSlug}.jpg`
        authorPicElement.setAttribute("src", imgUrl);
        authorPicElement.setAttribute("style", "display:visible");

    })
    .catch(error => {
        document.writeln("Error getting data...")
    })