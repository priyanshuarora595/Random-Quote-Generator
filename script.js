const delay = ms => new Promise(res => setTimeout(res, ms));
async function GetNewQuote(){
        document.getElementById('quote-box').style.display = 'none';
        document.getElementById('loader').style.display = 'block';
        
        await delay(1500);

        let num = parseInt(String(Math.random() * 1000));
        var temp = await fetch("https://type.fit/api/quotes");
        var data = await temp.json();
        document.getElementById('quote').innerHTML = data[num].text;
        document.getElementById('author').innerHTML = data[num].author;

        document.getElementById('loader').style.display = 'none';
        document.getElementById('quote-box').style.display = 'block';
}