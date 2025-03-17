import {CheckmarkIcon, SearchIcon} from '@sanity/icons'
import {Autocomplete, Box, Button, Stack} from '@sanity/ui'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import {promptFieldBasedActions} from '../../modules/promptFieldBased'
import {FilterFields} from '../../utils/schema'

export const CreatePromptFieldBased = (): React.ReactNode => {
  const [selectedValue, setSelectedValue] = useState<string>('')
  const filteredFields = FilterFields()
  const dispatch = useDispatch()

  const handleClick = () => {
    // Sanity UI auto complete limitations, that's we have such a hacky key for the autocompletion
    // It's not possible to send a object with the result, only a string can be passed
    const splitValues = selectedValue.split('.')
    dispatch(
      promptFieldBasedActions.addItem({
        field: {
          fieldName: splitValues[1],
          documentType: splitValues[0],
        },
      }),
    )
  }

  return (
    <Stack>
      <Autocomplete
        fontSize={[2, 2, 3]}
        icon={SearchIcon}
        onSelect={(value) => setSelectedValue(value)}
        id="autocomplete"
        options={filteredFields}
        openButton
        placeholder="Search options"
        renderValue={(value) => value}
      />
      <Box paddingTop={2}>
        <Button
          fontSize={1}
          icon={CheckmarkIcon}
          tone="default"
          padding={[3, 3, 4]}
          text="Add field"
          onClick={handleClick}
          disabled={!selectedValue}
        />
      </Box>
    </Stack>
  )
}
