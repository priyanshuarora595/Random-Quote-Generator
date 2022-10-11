async function GetNewQuote(){
        let num = parseInt(String(Math.random() * 1000));
        var temp = await fetch("https://type.fit/api/quotes");
        var data = await temp.json();
        document.getElementById('quote').innerHTML = data[num].text;
        document.getElementById('author').innerHTML = data[num].author;
}       