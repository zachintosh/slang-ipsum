import React from 'react'
import styles from './Paragraph.module.css'
import { Card, IconButton } from '@material-ui/core'
import CopyIcon from '@material-ui/icons/FileCopy'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Tooltip from '@material-ui/core/Tooltip'

export default function Paragraph({ copyText, index, paragraph, addSentence, removeSentence }) {

  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.contents}>
          <div className={styles.actions}>

            <Tooltip placement="left" title="Copy" aria-label="Copy Paragraph">
              <IconButton onClick={() => copyText(paragraph)}>
                <CopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip placement="left" title="Add Sentence" aria-label="Add Sentence">
              <IconButton color="primary" onClick={() => addSentence(index, paragraph)} >
                <AddIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip placement="left" title="Remove Sentence" aria-label="Remove Sentence">
              <IconButton color="secondary" onClick={() => removeSentence(index, paragraph)} >
                <RemoveIcon fontSize="small" />
              </IconButton>
            </Tooltip>

          </div>
          <span className={styles.text}>
            {paragraph}
          </span>
        </div>
      </Card>
    </div>
  );
}
  
