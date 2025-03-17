import {Button, Flex, Grid, Text, TextArea} from '@sanity/ui'
import React, {ReactNode, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useFormValue} from 'sanity'

import {useGetModelConfig} from '../../hooks/useSecrets'
import useTypedSelector from '../../hooks/useTypedSelector'
import {dialogActions} from '../../modules/dialogs'
import {geminiActions} from '../../modules/gemini'
import {openAiActions} from '../../modules/openai'
import {
  AiModelConfig,
  DialogCreatePromptProperties,
  OpenAiRole,
  PromptFieldBased,
} from '../../types'
import {visualizePromptFieldBased} from '../../utils/textManipulation'
import Dialog from '../Dialog'
import {PromptPlaceholderOverview} from '../PromptPlaceholderOverview'

type Props = {
  children: ReactNode
  dialog: DialogCreatePromptProperties
}

const writeFieldValueToPrompt = (fields: PromptFieldBased[], startPrompt: string): string => {
  let prompt = startPrompt
  fields.forEach((f: PromptFieldBased, _i) => {
    const value = String(useFormValue([f.fieldName.toLowerCase()]))
    if (value !== 'undefined') {
      // check if the value of the input field is found, if not found the input field is most likely not in this document
      prompt = prompt.replace(`${visualizePromptFieldBased(f)}`, value)
    }
  })

  return prompt
}

export const DialogCreatePrompt = (props: Props): React.ReactNode => {
  const {
    children,
    dialog: {id, template},
  } = props

  const startersPrompt = writeFieldValueToPrompt(template.promptFieldBased ?? [], template.prompt)
  const [prompt, setPrompt] = useState(startersPrompt)
  const hasGeminiConfigured = useTypedSelector((state) => state.gemini.configured)
  const {model, role, instructions} = useGetModelConfig(hasGeminiConfigured) as AiModelConfig
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(dialogActions.clearItem({id}))
  }

  const handleClick = () => {
    // No manual action for choosing OpenAI or Gemini
    // Prefer OpenAI to Gemini, remove OpenAI api key for using Gemini
    if (hasGeminiConfigured) {
      dispatch(
        geminiActions.createRequest({
          template,
          prompt,
          model,
          instructions: instructions as string,
        }),
      )
    } else {
      dispatch(openAiActions.createRequest({template, prompt, model, role: role as OpenAiRole}))
    }

    dispatch(dialogActions.clear())
    dispatch(openAiActions.setGenerateImage({value: false}))
    // We are not going to wait for the request to be completed
    // Track progress via input that allows author to continue working
  }

  return (
    <div>
      <Dialog header="Create a prompt" id={id} width={3} onClose={handleClose}>
        <Grid columns={[1]} gap={[1, 1, 2, 3]} padding={4}>
          <Flex direction="row" gap={2} justify="space-between" align="center">
            <Text size={2}>Create your prompt</Text>
            <Button
              fontSize={2}
              padding={3}
              radius="full"
              text="Generate"
              tone="default"
              onClick={handleClick}
            />
          </Flex>
          <TextArea
            fontSize={2}
            onChange={(event) => setPrompt(event.currentTarget.value)}
            padding={[3, 3, 4]}
            value={prompt}
          />
          <PromptPlaceholderOverview isEdit={false} />
          {children}
        </Grid>
      </Dialog>
    </div>
  )
}
