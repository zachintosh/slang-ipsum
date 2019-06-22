import React, { useState } from 'react'
import styles from './Controls.module.css'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CopyIcon from '@material-ui/icons/FileCopy'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ipsum, slang } from '../../lib/words'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles(theme => ({
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function Controls({ addParagraph, copyAll, setWords }) {
  const classes = useStyles()

  function updateWordSets({ target: { value, checked } }) {
    if (checked) setWords([...ipsum, ...slang])
    else setWords(slang)
  }

  return (
    <div className={styles.container}>

      <span className={styles.title}>Slang Ipsum</span>

      <div className={styles.controls}>
        <Button color="primary" variant="text" onClick={addParagraph}>
          <AddIcon className={classes.leftIcon} /> Paragraph
        </Button>
      </div>

      <div className={styles.rightControls}>

        <div>
          <Tooltip placement="left" enterDelay={1000} title="Toggle to disable using classic Lorem Ipsum in the generated text.">
            <FormControlLabel onChange={updateWordSets} control={<Checkbox color="primary" defaultChecked />} label="Include Ipsum" />
          </Tooltip>
        </div>


        <Button color="primary" variant="contained" onClick={copyAll}>
          <CopyIcon className={`${classes.leftIcon} ${classes.iconSmall}`} /> Copy All
        </Button>
      </div>
      
    </div>
  );
}
  
