import React, { useState } from 'react';
import './App.css';
import Controls from './components/Controls/Controls'
import Paragraph from './components/Paragraph/Paragraph'
import { paragraph as newParagraph, sentence as newSentence } from '@digital-taco/slang-ipsum'

function App() {
  const [slangOnly, setSlangOnly] = useState(false)
  const [paragraphs, setParagraphs] = useState([newParagraph({ slangOnly })])

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
    setParagraphs([...paragraphs, newParagraph({ slangOnly })])
  }

  function removeParagraph(index, paragraph) {
    setParagraphs(paragraphs.slice(0, index).concat(paragraphs.slice(index + 1)))
  }

  function addSentence(index, paragraph) {
    paragraphs[index] += ' ' + newSentence({ slangOnly })
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
      <Controls addParagraph={addParagraph} copyAll={copyAll} setSlangOnly={setSlangOnly} />
      <div style={{ maxWidth: '900px', margin: '20px auto' }}>
        {paragraphs.map((paragraph, index) => (
          <Paragraph
            key={index}
            copyText={copyText}
            index={index}
            paragraph={paragraph}
            addSentence={addSentence}
            removeSentence={removeSentence}
            removeParagraph={removeParagraph}
          />
        ))}
      </div>
    </>
  )
}

export default App;
