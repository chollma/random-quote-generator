/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Selection of quotes to choose from: 
var quotes = [
    { quote: "The Antidote to exhaustion isn't rest. It's nature.", source: 'Shikoba', citation: '', year: '' },
    { quote: 'Earth and sky, woods and fields, lakes and rivers, the mountain and the sea, are excellent schoolmasters, and teach of us more than we can ever learn from books.', source: 'John Lubbock', citation: '', year: '' },
    { quote: 'He is richest who is content with the least, for content is the wealth of nature.', source: 'Socrates', citation: '', year: '' },
    { quote: 'I took a walk in the woods and came out taller than the trees.', source: 'Henry David Thoreau', citation: '', year: '' },
    { quote: 'The human spirit needs places where nature has not been rearranged by the hand of man.', source: 'Proverb', citation: '', year: '' },
    { quote: 'All good things are wild and free.', source: 'Proverb', citation: '', year: '' },
    { quote: 'In every walk with nature one receives far more than he seeks.', source: 'John Muir', citation: '', year: '' },
    { quote: "I'd rather be in the mountains thinking of God than in church thinking about the mountains.", source: 'John Muir', citation: '', year: '' },
    { quote: "Because in the end, you won't remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain.", source: 'Jack Kerouac', citation: '', year: '' },
    { quote: "I go to nature every day for inspiration in the day's work.", source: 'Frank Lloyd Wright', citation: '', year: '' }
]

function getRandomQuote (array) {
  var number = Math.floor((Math.random() * quotes.length ) + 1 ); // Create a variable that generates a random number between zero and the last index in the quotes array 
  var output = quotes[number]["quote"]; // Utilizing the number in the previous step as an index, access a quote from the object and assign it to the 'output' variable
  return output;
  } 

function printQuote (){}

// Click Event Listener
document.getElementById('load-quote').addEventListener("click", printQuote, false);