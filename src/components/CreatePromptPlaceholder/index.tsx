import {CheckmarkIcon} from '@sanity/icons'
import {Box, Button, Stack, TextInput} from '@sanity/ui'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import {promptPlaceHolderActions} from '../../modules/promptPlaceholders'

export const CreatePromptPlaceholder = (): React.ReactNode => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(promptPlaceHolderActions.addItem({placeholder: {name, description, processed: false}}))
    clearFields()
  }

  const clearFields = () => {
    setName('')
    setDescription('')
  }

  return (
    <Stack>
      <TextInput
        onChange={(event) => setName(event.currentTarget.value)}
        placeholder="Name"
        value={name}
        style={{marginTop: '8px'}}
      />
      <Box paddingTop={2}>
        <TextInput
          onChange={(event) => setDescription(event.currentTarget.value)}
          placeholder="Description"
          value={description}
          style={{marginTop: '4px'}}
        />
      </Box>
      <Box paddingTop={2}>
        <Button
          fontSize={1}
          icon={CheckmarkIcon}
          tone="default"
          padding={[3, 3, 4]}
          text="Add placeholder"
          onClick={handleClick}
          disabled={!name}
        />
      </Box>
    </Stack>
  )
}
