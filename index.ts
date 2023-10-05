function findLongestWord(sentence: string): string {
  const words = sentence.toLowerCase().match(/[a-z]+/g) || []

  let longestWord = ''
  let maxLength = 0
  let maxVowels = 0

  for (let word of words) {
    const length = word.length
    const vowels = (word.match(/[aeiou]/gi) || []).length

    if (length > maxLength || (length === maxLength && vowels > maxVowels)) {
      longestWord = word
      maxLength = length
      maxVowels = vowels
    }
  }

  return longestWord
}
// test cases
const sentence1 = 'I love dogs'

const sentence2 = `Smart people learn from everything and everyone, average people from their experience, 
  stupid people already, have all the answers`

const sentence3 = `I am a good $developer$. I am also a writer`

const sentence4 = `I 2love dogs`

console.log('findLongestWord(sentence1) :>> ', findLongestWord(sentence1)) // "love"

console.log('findLongestWord(sentence2) :>> ', findLongestWord(sentence2)) // "experience"

console.log('findLongestWord(sentence3) :>> ', findLongestWord(sentence3)) // "developer"

console.log('findLongestWord(sentence4) :>> ', findLongestWord(sentence4)) // "love
