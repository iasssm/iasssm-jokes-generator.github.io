//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');

//array
const quotes = [
  {
    quote: 'How do you make 7 even? Take away the s.',
  },
  {
    quote: "Dad, can you put my shoes on?No, I don't think they'll fit me.",
  },
  {
    quote:
      "Did you hear the rumor about butter? Well, I'm not going to spread it!",
  },
  {
    quote: "Where do boats go when they're sick? To the boat doc.",
  },
  {
    quote: "I asked my dog what's two minus two. He said nothing.",
  },
  {
    quote: 'Where do fruits go on vacation? Pear-is!',
  },
  {
    quote: 'What did the ocean say to the beach? Nothing, it just waved.',
  },
  {
    quote: "I'm afraid for the calendar. Its days are numbered.",
  },
];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  // joke.innerText = quotes[random].person;
});
