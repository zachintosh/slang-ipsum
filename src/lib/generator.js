export function newSentence(words) {
  if (!words) return
  const sentenceWords = []
  let sentenceLength = 0;
  while (sentenceLength < 4) {
    sentenceLength = Math.random() * 17
  }
  while (sentenceWords.length < sentenceLength) {
    const index = Math.floor(Math.random() * words.length)
    sentenceWords.push(words[index])
  }
  sentenceWords[0] = sentenceWords[0][0].toUpperCase() + sentenceWords[0].slice(1)
  return `${sentenceWords.join(' ')}.`
}

export function newParagraph(words) {
  let length = 0;
  while (length < 3) {
    length = Math.random() * 10
  }
  const para = Array.from({ length }, () => newSentence(words))
  return para.join(' ')
}