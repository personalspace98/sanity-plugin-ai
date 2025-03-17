import {AddIcon, CheckmarkCircleIcon} from '@sanity/icons'
import {Button, Grid, TextArea, TextInput} from '@sanity/ui'
import React, {ReactNode, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'

import useTypedSelector from '../../hooks/useTypedSelector'
import {dialogActions} from '../../modules/dialogs'
import {selectAllFieldBasedPrompts} from '../../modules/promptFieldBased'
import {
  selectAllDeletedPrompts,
  selectAllPlaceholdersPrompts,
} from '../../modules/promptPlaceholders'
import {templateActions} from '../../modules/templates'
import {DialogTemplateProperties, Template} from '../../types'
import {visualizePromptFieldBased, visualizePromptPlaceholder} from '../../utils/textManipulation'
import {combineArrays} from '../../utils/util'
import Dialog from '../Dialog'
import {PromptOptions} from '../PromptOptions'

type Props = {
  children: ReactNode
  dialog: DialogTemplateProperties
}

export const DialogSaveTemplate = (props: Props): React.ReactNode => {
  const {
    children,
    dialog: {id, template},
  } = props

  const inProgress = useTypedSelector((state) => state.templates.inProgress)
  const isEditDialog = typeof template !== 'undefined'
  const [title, setTitle] = useState<string>(template?.title as string)
  const [prompt, setPrompt] = useState<string>(template?.prompt as string)
  const promptPlaceholders = useTypedSelector((state) => selectAllPlaceholdersPrompts(state))
  const promptFieldBased = useTypedSelector((state) => selectAllFieldBasedPrompts(state))
  const deletedPromptPlaceholders = useTypedSelector((state) => selectAllDeletedPrompts(state))

  const dispatch = useDispatch()

  // Button clicks
  const handleClose = () => {
    dispatch(dialogActions.clear())
  }

  const handleClick = () => {
    const updatedTemplate: Template = {
      title,
      prompt: prompt,
      promptPlaceholders: promptPlaceholders,
      promptFieldBased: combineArrays(promptFieldBased, template?.promptFieldBased),
    }

    if (isEditDialog) {
      updatedTemplate._id = template?._id
      updatedTemplate._updatedAt = new Date().toDateString()
      dispatch(templateActions.updateRequest({template: updatedTemplate}))
    } else {
      dispatch(
        templateActions.createRequest({
          template: updatedTemplate,
        }),
      )
    }
    dispatch(templateActions.setSelectedValue({template: updatedTemplate, value: false}))
  }

  useEffect(() => {
    let updatedPrompt = prompt ?? ''
    console.log('updatedpropt', updatedPrompt)
    promptPlaceholders.forEach((pp) => {
      const virtualPlaceholder = visualizePromptPlaceholder(pp.name)
      if (pp.deleted) {
        console.log('delete the following prompt', pp)
        updatedPrompt = updatedPrompt.replaceAll(virtualPlaceholder, '')
      }

      updatedPrompt += ` ${virtualPlaceholder}`
      console.log('updatedpropt II', updatedPrompt)
      // if (pp.deleted) {
      //   console.log('delete the following prompt', pp)
      //   setPrompt(`${prompt ? prompt.replaceAll(virtualPlaceholder, '') : prompt}`)
      //   return
      // }
      //
      // console.log('set prompt', pp)
      // setPrompt(`${prompt ?? ''} ${virtualPlaceholder}`)
    })

    console.log('last', updatedPrompt)
    setPrompt(updatedPrompt.trim())
    // const lastItem = promptPlaceholders[promptPlaceholders.length - 1]
    // const virtualPlaceholder = visualizePromptPlaceholder(lastItem.name)
    // console.log('virtualPlaceholder', virtualPlaceholder)
    // console.log('prompyyt', prompt)
    // setPrompt(`${prompt ?? ''} ${virtualPlaceholder}`)

    if (promptFieldBased.length) {
      const lastItem = promptFieldBased[promptFieldBased.length - 1]
      setPrompt(`${prompt ?? ''} ${visualizePromptFieldBased(lastItem)}`)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promptPlaceholders, promptFieldBased, deletedPromptPlaceholders])

  return (
    <div>
      <Dialog
        header="Create an new template for AI text generation"
        id={id}
        width={3}
        onClose={handleClose}
      >
        <Grid columns={[1]} gap={[1, 1, 2, 3]} padding={4}>
          <TextInput
            onChange={(event) => setTitle(event.currentTarget.value)}
            placeholder="Template Title"
            value={title}
          />
          <TextArea
            value={prompt}
            onChange={(e) => setPrompt(e.currentTarget.value)}
            rows={5}
            placeholder="Enter your prompt"
          />
          <PromptOptions />
          <Button
            disabled={!title || !prompt}
            fontSize={[1, 1, 1]}
            icon={isEditDialog ? CheckmarkCircleIcon : AddIcon}
            padding={[3, 3, 4]}
            text={isEditDialog ? 'Save changes' : 'Add template'}
            onClick={handleClick}
            loading={inProgress}
            tone="default"
          />
          {children}
        </Grid>
      </Dialog>
    </div>
  )
}
