const quotes = [
    {
        quote: '“The secret of getting ahead is getting started.”',
        author: "Mark Twain"
    },
    {
        quote: '“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”',
        author: "Mary Kay Ash"
    },
    {
        quote: '“The best time to plant a tree was 20 years ago. The second best time is now.” ',
        author: "Chinese Proverb"
    },
    {
        quote: '“If people are doubting how far you can go, go so far that you can’t hear them anymore.”',
        author: "Michele Ruiz"
    },
    {
        quote: '“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.”',
        author: "Helen Keller"
    },
    {
        quote: '“Do one thing every day that scares you.”',
        author: "Eleanor Roosevelt"
    },
    {
        quote: '“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.”',
        author: "Socrates"
    },
    {
        quote: '“Don’t be afraid to give up the good to go for the great.”',
        author: "John D. Rockefeller"
    }
];
    
    let colors = ["red","orange", "yellow", "green", "blue", "indigo", "violet"];
const btn = document.getElementById("btn");
    btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length) ;    
    let random2 = Math.floor(Math.random() * colors.length) ;    
    document.getElementById("quote").innerHTML = quotes[random].quote;
    document.querySelector("#author").innerHTML = quotes[random].author;
    document.querySelector(".container").style.backgroundColor = colors[random2];
   
});