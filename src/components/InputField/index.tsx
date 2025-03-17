import {Box, Flex, Stack, TextArea, TextInput} from '@sanity/ui'
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {ImageInputProps, InputProps, PatchEvent, set, unset} from 'sanity'

import {GlowingDiv} from '../../config/styledComponents'
import useTypedSelector from '../../hooks/useTypedSelector'
import {dialogActions} from '../../modules/dialogs'
import {geminiActions} from '../../modules/gemini'
import {openAiActions} from '../../modules/openai'
import {ImageGenerationField} from '../ImageGenerationField'
import Logo from '../Logo'

export const InputField = ({props}: {props: InputProps}): React.ReactNode => {
  const {elementProps, schemaType} = props
  const [value, setValue] = useState<string>(props.value as string)
  const [borderColor, setBorderColor] = useState<string>('transparent')

  const prompt = useTypedSelector((state) => state.gemini.prompt || state.openAi.prompt)
  const imageUrl = useTypedSelector((state) => state.generatedImage.imageUrl)
  const inProgress = useTypedSelector(
    (state) =>
      state.gemini.inProgress || state.openAi.inProgress || state.generatedImage.inProgress,
  )
  const error = useTypedSelector(
    (state) =>
      state.gemini.creatingError || state.openAi.creatingError || state.generatedImage.error,
  )
  const dispatch = useDispatch()
  dispatch(geminiActions.checkConfigured())

  const imageStyle = {
    marginLeft: '12px',
    marginRight: '12px',
  }

  const inputStyle = {
    width: '100%',
  }

  const handleButtonClick = () => {
    if (schemaType.name === 'image') {
      dispatch(openAiActions.setGenerateImage({value: true}))
    }
    dispatch(dialogActions.showTemplatesDialog())
  }

  useEffect(() => {
    if (prompt) {
      const patch = prompt ? PatchEvent.from(set(prompt)) : PatchEvent.from(unset())
      props.onChange(patch)
      setValue(prompt)
      setBorderColor('green')
    } else if (imageUrl) {
      setBorderColor('green')
    } else if (inProgress) {
      setBorderColor('orange')
    } else if (error) {
      setBorderColor('red')
    }
  }, [prompt, inProgress, imageUrl])

  return (
    <GlowingDiv borderColor={borderColor}>
      {schemaType.name === 'image' ? (
        <Flex direction="row" align="flex-start" justify="space-between">
          <div style={inputStyle}>{<ImageGenerationField props={props as ImageInputProps} />}</div>
          <Box style={imageStyle} onClick={handleButtonClick}>
            <Logo />
          </Box>
        </Flex>
      ) : (
        <Flex direction="row" align={schemaType.name === 'string' ? 'center' : 'flex-start'}>
          <Stack style={inputStyle}>
            {schemaType.name === 'text' && <TextArea {...elementProps} value={value} rows={10} />}
            {schemaType.name === 'string' && (
              <TextInput {...elementProps} value={value} style={inputStyle} />
            )}
          </Stack>
          <Box style={imageStyle} onClick={handleButtonClick}>
            <Logo />
          </Box>
        </Flex>
      )}
    </GlowingDiv>
  )
}
