let quotes =[
    [
       "Genius is 1% talent and 99% hard work",
       "Albert Einstein" 
    ],
    [
        "Fear is that little darkroom where negatives are developed.",
        "Michael Pritchard",

    ],
    [
        "Everything in the world may be endured except continued prosperity.",
        "Johann Wolfgang von Goethe",

    ],
    [
        "What you do, the way you think, makes you beautiful.",
        "Scott Westerfeld",

    ],
    [
        "We all self-conscious. I'm just the first to admit it.",
        "Kanye West",

    ],
    [
        "Finance is the art of passing money from hand to hand until it finally disappears.",
        "Robert W. Sarnoff",

    ],
    [
        "Nothing is really work unless you would rather be doing something else.",
        "James M. Barrie",

    ],
    [
        "If all the world's a stage, I want to operate the trap door.",
        "Paul Beatty",
    ],
    [
        "Charm and nothing but charm at last grows a little tiresome. It's a relief then to deal with a man who isn't quite so delightful but a little more sincere.",
        "W. Somerset Maugham",
    ],
    [
        "Dive into the sea of thought, and find there pearls beyond price.",
        "Moses Ibn Ezra",
    ]
];

//generating random quotes from quotes array
let btn = document.querySelector('.generate');
console.log(btn);

let getRandomNumbers=()=>{
        return Math.floor(Math.random()*quotes.length);
}

let RandomQuote=()=>{
    let x = getRandomNumbers();
    

    document.querySelector('.quote').innerHTML = '"' +quotes[x][0]+'"';
    document.querySelector('.person').innerHTML = '"' + quotes[x][1]+ '"'
}

btn.addEventListener('click',RandomQuote)

