const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const capitalize = (string) => {
  if (typeof string !== 'string' || string.length === 0) return '';
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const titleCased = () => {
  return tutorials.map(tutorial => {
    const words = tutorial.split(" ")
    const capitalizedWords = words.map(capitalize)
    return capitalizedWords.join(" ")
  })
}
