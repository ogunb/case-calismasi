function textToNumber(text) {
  if (text === 'zero') return 0;
  const splitText = text.split(',');
  const numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    twenty: 2,
    thirty: 3,
    forty: 4,
    fifty: 5,
    sixty: 6,
    seventy: 7,
    eighty: 8,
    ninety: 9,
  };
  const numberTeens = {
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
  };
  let number = '';
  let reminder = '';
  for (let i = 0; i < splitText.length; i++) {
    const currSentence = splitText[i].trim().split(' ');
    for (let j = 0; j < currSentence.length; j++) {
      if (currSentence[j] !== 'and') {
        if (numbers[currSentence[j]]) {
          number += numbers[currSentence[j]];
        } else if (currSentence[j] === 'hundred') {
          if (!numbers[currSentence[j + 1]]) {
            reminder += 0;
          }
          if (!numbers[currSentence[j + 2]]) {
            reminder += 0;
          }
        } else if (numberTeens[currSentence[j]]) {
          number += numberTeens[currSentence[j]];
          j++;
        } else if (reminder !== '') {
          number += reminder;
          reminder = '';
        }
      }
    }
  }
  return parseInt(number);
}
exports.textToNumber = textToNumber;
