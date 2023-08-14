// Thanks to Useful Programmer Youtube channel
window.onload = go;
function go() {
  // Triggers genRandQuote when New Quote button is clicked
  $("#new-quote").click(function () {
    genRandQuote();
  });

  $("#tweet-quote").click(function () {});

  // Generate a random quote when window is loaded initially
  genRandQuote();
}

// Generates a random quote from the quote variable and renders it to DOM
function genRandQuote() {
  var quotes = [
    {
      id: 1,
      text:
        "You know, Hobbes, some days even my lucky rocketship underpants don't help.",
      source: "Bill Watterson"
    },
    {
      id: 2,
      text:
        "Even if we don't have the power to choose where we come from, we can still choose where we go from there.",
      source: "Stephen Chbosky"
    },
    {
      id: 3,
      text: "And now that you don't have to be perfect, you can be good.",
      source: "John Steinbeck"
    },
    {
      id: 4,
      text:
        "I haven't had a very good day. I think I might still be hungover and everyone's dead and my root beer's gone.",
      source: "Holly Black"
    },
    {
      id: 5,
      text: "Rule your mind or it will rule you.",
      source: "Horace"
    },
    {
      id: 6,
      text: "All that we are is the result of what we have thought.",
      source: "Buddha"
    },
    {
      id: 7,
      text:
        "But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.",
      source: "Charles Darwin"
    },
    {
      id: 8,
      text: "Never leave that till tomorrow which you can do today.",
      source: "Benjamin Franklin"
    },
    {
      id: 9,
      text:
        "Procrastination is like a credit card: it's a lot of fun until you get the bill.",
      source: "Christopher Parker"
    },
    {
      id: 10,
      text: "Someday is not a day of the week.",
      source: "Author Unknown"
    },
    {
      id: 11,
      text: "Tomorrow is often the busiest day of the week.",
      source: "Spanish Proverb"
    },
    {
      id: 12,
      text:
        "I can accept failure, everyone fails at something. But I can't accept not trying.",
      source: "Michael Jordan"
    },
    {
      id: 13,
      text:
        "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
      source: "Oscar Wilde"
    },
    {
      id: 14,
      text:
        "I've had the sort of day that would make St. Francis of Assisi kick babies.",
      source: "Douglas Adams"
    },
    {
      id: 15,
      text:
        "There is only one success--to be able to spend your life in your own way.",
      source: "Christopher Morley"
    },
    {
      id: 16,
      text:
        "Success is the good fortune that comes from aspiration, desperation, perspiration and inspiration.",
      source: "Evan Esar"
    },
    {
      id: 17,
      text:
        "We are still masters of our fate. We are still captains of our souls.",
      source: "Winston Churchill"
    },
    {
      id: 18,
      text: "Our truest life is when we are in dreams awake.",
      source: "Henry David Thoreau"
    },
    {
      id: 19,
      text: "The best way to make your dreams come true is to wake up.",
      source: "Paul Valery"
    },
    {
      id: 20,
      text:
        "Life without endeavor is like entering a jewel mine and coming out with empty hands.",
      source: "Japanese Proverb"
    },
    {
      id: 21,
      text:
        "Happiness does not consist in pastimes and amusements but in virtuous activities.",
      source: "Aristotle"
    },
    {
      id: 22,
      text:
        "By constant self-discipline and self-control, you can develop greatness of character.",
      source: "Grenville Kleiser"
    },
    {
      id: 23,
      text: "Don't cry because it's over. Smile because it happened.",
      source: "Dr. Seuss"
    },
    {
      id: 24,
      text:
        "At the end of the day, let there be no excuses, no explanations, no regrets.",
      source: "Steve Maraboli"
    },
    {
      id: 25,
      text:
        "Inaction will cause a man to sink into the slough of despond and vanish without a trace.",
      source: "Farley Mowat"
    },
    {
      id: 26,
      text:
        "True freedom is impossible without a mind made free by discipline.",
      source: "Mortimer J. Adler"
    },
    {
      id: 27,
      text:
        "The most powerful control we can ever attain, is to be in control of ourselves.",
      source: "Chris Page"
    },
    {
      id: 28,
      text:
        "Idleness is only the refuge of weak minds, and the holiday of fools.",
      source: "Philip Dormer Stanhope"
    },
    {
      id: 29,
      text: "This is your life and it's ending one minute at a time.",
      source: "Tyler Durden, Fight Club"
    },
    {
      id: 30,
      text: "You create opportunities by performing, not complaining.",
      source: "Muriel Siebert"
    },
    {
      id: 31,
      text:
        "Great achievement is usually born of great sacrifice, and is never the result of selfishness.",
      source: "Napoleon Hill"
    },
    {
      id: 32,
      text: "Whether you think you can, or you think you can't, you're right.",
      source: "Henry Ford"
    },
    {
      id: 33,
      text:
        "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.",
      source: "Martin Luther"
    },
    {
      id: 34,
      text: "Great acts are made up of small deeds.",
      source: "Lao Tzu"
    },
    {
      id: 35,
      text: "The flame that burns Twice as bright burns half as long.",
      source: "Lao Tzu"
    },
    {
      id: 36,
      text:
        "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
      source: "Antoine de Saint-Exupery"
    },
    {
      id: 37,
      text: "If you can't do great things, do small things in a great way.",
      source: "Napoleon Hill"
    },
    {
      id: 38,
      text: "When I let go of what I am, I become what I might be.",
      source: "Lao Tzu"
    },
    {
      id: 39,
      text:
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      source: "Ralph Waldo Emerson"
    },
    {
      id: 40,
      text: "Well done is better than well said.",
      source: "Benjamin Franklin"
    },
    {
      id: 41,
      text:
        "Whatever you think the world is withholding from you, you are withholding from the world.",
      source: "Ekhart Tolle"
    },
    {
      id: 42,
      text: "Muddy water is best cleared by leaving it alone.",
      source: "Alan Watts"
    },
    {
      id: 43,
      text: "Do, or do not. There is no try.",
      source: "Yoda"
    },
    {
      id: 44,
      text:
        "The superior man is modest in his speech, but exceeds in his actions.",
      source: "Confucius"
    },
    {
      id: 45,
      text:
        "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
      source: "Helen Keller"
    },
    {
      id: 46,
      text:
        "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
      source: "Marie Curie"
    },
    {
      id: 47,
      text: "Everything is hard before it is easy.",
      source: "Johann Wolfgang von Goethe"
    },
    {
      id: 48,
      text: "Anyone who has never made a mistake has never tried anything new.",
      source: "Albert Einstein"
    },
    {
      id: 49,
      text: "Don't let your happiness depend on something you may lose.",
      source: "C.S. Lewis"
    },
    {
      id: 50,
      text: "We are all broken, that's how the light gets in.",
      source: "Ernest Hemingway"
    },
    {
      id: 51,
      text:
        "Monsters are real, ghosts are real, too. They live inside us, and sometimes they win.",
      source: "Stephen King"
    },
    {
      id: 52,
      text: "Above all, be the heroine of your life, not the victim.",
      source: "Nora Ephron"
    },
    {
      id: 53,
      text:
        "Learn from the mistakes of others. You can’t live long enough to make them all yourself.",
      source: "Eleanor Roosevelt"
    },
    {
      id: 54,
      text: "It hurt because it mattered.",
      source: "John Green"
    },
    {
      id: 55,
      text:
        "Some of us think holding on makes us strong; but sometimes it is letting go.",
      source: "Herman Hesse"
    },
    {
      id: 56,
      text: "If you don’t risk anything, you risk even more.",
      source: "Erica Jong"
    },
    {
      id: 57,
      text: "When the whole world is silent, even one voice becomes powerful.",
      source: "Malala Yousafzai"
    },
    {
      id: 58,
      text:
        "The most common way people give up their power is by thinking they don’t have any.",
      source: "Alice Walker"
    },
    {
      id: 59,
      text: "Life's not fair; why should I be?",
      source: "Margaret Atwood"
    },
    {
      id: 60,
      text: "As you start to walk on the way, the way appears.",
      source: "​Rumi"
    },
    {
      id: 61,
      text:
        "If I had to live my life again, I’d make the same mistakes, only sooner.",
      source: "Tallulah Bankhead"
    },
    {
      id: 62,
      text: "Life is a journey, not a destination.",
      source: "Ralph Waldo Emerson"
    },
    {
      id: 63,
      text: "If you obey all the rules, you miss all the fun.",
      source: "Katharine Hepburn"
    },
    {
      id: 64,
      text: "Life shrinks or expands in proportion to one’s courage.",
      source: "Anaïs Nin"
    },
    {
      id: 65,
      text: "Sooner or later even the fastest runners have to stand and fight.",
      source: "Stephen King"
    },
    {
      id: 66,
      text:
        "How wonderful it is that nobody need wait a single moment before beginning to improve the world.",
      source: "Anne Frank"
    },
    {
      id: 67,
      text: "We rise by lifting others.",
      source: "Robert Ingersoll"
    },
    {
      id: 68,
      text:
        "There are still many causes worth sacrificing for, so much history yet to be made.",
      source: "Michelle Obama"
    },
    {
      id: 69,
      text: "Nothing is impossible; the word itself says ‘I’m possible’!",
      source: "Audrey Hepburn"
    },
    {
      id: 70,
      text: "You only live once, but if you do it right, once is enough.",
      source: "Mae West"
    }
  ];
  var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.source);
  $("#tweet-quote").attr(
    "href",
    stringToClickToTweetURL('"' + randQuote.text + '" - ' + randQuote.source)
  );
}

// This function makes strings into click to tweet URLS
function stringToClickToTweetURL(str) {
  // Convert to Click to Tweet URL
  var stringToConvert = str
    .split(" ")
    .join("%20")
    .split("@")
    .join("%40")
    .split("!")
    .join("%21");

  // Put 'Click to Tweet' URL suffix at the begining
  var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;

  // Return properly formatted "Click to Tweet URL"
  return resultString;
}
