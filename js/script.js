import { read } from "fs";

/******************************************
Student: Cooper Hollmaier
Project: Techdegree - Unit 1
Intended Behavior: A Random Quote Generator
******************************************/

// Pre-selected a list of 10 outdoor themed quotes. 2 of them contain values for citation and year. 
var quotes = [
  { quote: "The Antidote to exhaustion isn't rest. It's nature.", source: 'Shikoba', citation: '', year: '', tags: 'outdoors'  },
  { quote: "Earth and sky, woods and fields, lakes and rivers, the mountain and the sea, are excellent schoolmasters, and teach of us more than we can ever learn from books.", source: 'John Lubbock', citation: '', year: '', tags: 'outdoors' },
  { quote: "He is richest who is content with the least, for content is the wealth of nature.", source: 'Socrates', citation: '', year: '', tags: 'outdoors' },
  { quote: "I took a walk in the woods and came out taller than the trees.", source: 'Henry David Thoreau', citation: '', year: '', tags: 'outdoors' },
  { quote: "The human spirit needs places where nature has not been rearranged by the hand of man.", source: 'Proverb', citation: '', year: '', tags: 'outdoors' },
  { quote: "All good things are wild and free.", source: 'Proverb', citation: '', year: '', tags: 'outdoors' },
  { quote: "In every walk with nature one receives far more than he seeks.", source: 'John Muir', citation: 'Steep Trails', year: '1918', tags: 'outdoors' },
  { quote: "I'd rather be in the mountains thinking of God than in church thinking about the mountains.", source: 'John Muir', citation: 'The Unpublished Journals of John Muir', year: '1924', tags: 'outdoors' },
  { quote: "Because in the end, you won't remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain.", source: 'Jack Kerouac', citation: '', year: '', tags: 'outdoors' },
  { quote: "I go to nature every day for inspiration in the day's work.", source: 'Frank Lloyd Wright', citation: '', year: '', tags: 'outdoors' }
]

// Pre-selected list that contains the colors of the rainbow as strings of text
var colors = [
  { color: 'red'},
  { color: 'orange'},
  { color: 'yellow'},
  { color: 'green'},
  { color: 'indigo'},
  { color: 'blue'},
  { color: 'purple'}
]

// Generation of a random number to serve as the index for accessing the object above. Output should be a singular item object in the array.
function getRandomQuote(array) {
  var number = Math.floor((Math.random() * array.length) + 1);
  var output = array[number];
  return output;
}

function getRandomColor(array) {
  var numberTwo = Math.floor((Math.random() * array.length) + 1);
  var outputColor = array[numberTwo];
  return outputColor;
}

// Assembly of HTML output string utilizing the information returned from getRandomQuote
function printQuote() {
  var responseQuote = getRandomQuote(quotes); // Get a random quote object with properties
  var outputHTML = '<p class="quote">' + responseQuote.quote + '</p>';
  outputHTML += '<p class="source">' + responseQuote.source;

  if (responseQuote.citation) {
    outputHTML += '<span class="citation">' + responseQuote.citation + '</span>';
  }
  if (responseQuote.year) {
    outputHTML += '<span class ="year">' + responseQuote.year + '</span>';
  }
  if (responseQuote.tags) {
    var outputTags = '<p>Theme: ' + responseQuote.tags.toUpperCase() + '</p>';
  }
  outputHTML += '</p>';
  document.getElementById('tags').innerHTML = outputTags;
  document.getElementById('quote-box').innerHTML = outputHTML;
}



// Activation of the printQuote function everytime the user clicks the on-page button
document.getElementById('load-quote').addEventListener("click", printQuote, false);

