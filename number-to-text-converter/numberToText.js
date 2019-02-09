/* Convert numbers into words.
 * @param {number} num Number to be converted to words. 32
 * @return {string} Number as words. "Thirty five."
 */
function numberToText(num) {
  if (num === 0) return 'zero';
  if (!num) return '';
  function getNumberName(number) {
    const numberNames = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
    };
    return numberNames[number];
  }
  function splitAndConvertToText(number, counter = 0) {
    const lastThreeDigit = number.substring(number.length - 3);
    const rest = number.substring(0, number.length - 3);
    const bigNumberNames = {
      0: '',
      1: 'thousand',
      2: 'million',
      3: 'billion',
      4: 'trilion',
      5: 'quadrillion',
    };
    const text = [];
    const basamaklar = {
      birler:
        lastThreeDigit[lastThreeDigit.length - 1] !== '0' &&
        !!lastThreeDigit[lastThreeDigit.length - 1],
      onlar:
        lastThreeDigit[lastThreeDigit.length - 2] !== '0' &&
        !!lastThreeDigit[lastThreeDigit.length - 2],
      yuzler:
        lastThreeDigit[lastThreeDigit.length - 3] !== '0' &&
        !!lastThreeDigit[lastThreeDigit.length - 3],
      teen: lastThreeDigit[1] === '1',
    };
    if (basamaklar.birler) {
      text.unshift(getNumberName(lastThreeDigit[lastThreeDigit.length - 1]));
    }
    if (basamaklar.teen) {
      text.shift();
      text.unshift(getNumberName(lastThreeDigit.substring(1)));
    } else if (basamaklar.onlar) {
      text.unshift(
        getNumberName((lastThreeDigit[lastThreeDigit.length - 2] += 0))
      );
    }
    if (basamaklar.yuzler) {
      lastThreeDigit[2]
        ? counter === 0
          ? text.unshift(`${getNumberName(lastThreeDigit[0])} hundred and`)
          : text.unshift(`${getNumberName(lastThreeDigit[0])} hundred`)
        : text.unshift(`${getNumberName(lastThreeDigit[0])}`);
    }
    if (text.length) {
      text.push(bigNumberNames[counter]);
    }
    if (!rest) return text.join(' ');
    return text.length
      ? `${splitAndConvertToText(rest, (counter += 1))}, ${text
          .join(' ')
          .trim()}`
      : `${splitAndConvertToText(rest, (counter += 1))}`;
  }
  const numToString = `${num}`;
  let numberText = splitAndConvertToText(numToString, 0);
  if (!numberText.includes('and ')) {
    numberText = numberText.replace(/,(?=[^,]*$)/g, ' and');
  }
  return numberText.trim();
}

exports.numberToText = numberToText;
