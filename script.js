async function GetNewQuote(){
        let num = parseInt(String(Math.random() * 1000));
        var response = await fetch("https://type.fit/api/quotes");
        var data = await response.json();

        document.getElementById('quote').innerHTML = data[num].text.trim();
        
        const authorName = data[num].author.trim();
        const author=document.getElementById('author');
        
        if(!authorName) author.innerHTML="Unknown"
        else author.innerHTML = authorName;
}       