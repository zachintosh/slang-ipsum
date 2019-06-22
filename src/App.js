import React, { useState } from 'react';
import './App.css';
import Controls from './components/Controls/Controls'
import Paragraph from './components/Paragraph/Paragraph'
import { newParagraph, newSentence } from './lib/generator'
import { slang, ipsum } from './lib/words'

function App() {
  const [words, setWords] = useState([...slang, ...ipsum])
  const [paragraphs, setParagraphs] = useState([newParagraph(words)])

  console.log(words)

  function copyText(text) {
    if (!text) return
    const tempTextarea = document.createElement('textarea')
    tempTextarea.value = text
    document.body.appendChild(tempTextarea)
    tempTextarea.select()
    document.execCommand('copy')
    document.body.removeChild(tempTextarea)
  }

  function copyAll() {
    const text = paragraphs.join('\n\n')
    copyText(text)
  }

  function addParagraph() {
    setParagraphs([...paragraphs, newParagraph(words)])
  }

  function addSentence(index, paragraph) {
    paragraphs[index] += ' ' + newSentence(words)
    setParagraphs([...paragraphs])
  }

  function removeSentence(index, paragraph) {
    const sentences = paragraph.split('. ')
    if (sentences.length < 2) return
    sentences.pop()
    paragraphs[index] = sentences.join('. ') + '.'
    setParagraphs([...paragraphs])
  }

  return (
    <>
      <Controls addParagraph={addParagraph} copyAll={copyAll} setWords={setWords} />
      <div style={{ maxWidth: '900px', margin: '20px auto' }}>
        {paragraphs.map((paragraph, index) => (
          <Paragraph
            key={index}
            copyText={copyText}
            index={index}
            paragraph={paragraph}
            addSentence={addSentence}
            removeSentence={removeSentence}
          />
        ))}
      </div>
    </>
  )
}

export default App;
