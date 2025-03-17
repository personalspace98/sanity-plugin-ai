import {TrashIcon} from '@sanity/icons'
import {Box, Button, Card, Flex, Inline, Label, Text} from '@sanity/ui'
import React from 'react'
import {useDispatch} from 'react-redux'

import useTypedSelector from '../../hooks/useTypedSelector'
import {
  promptPlaceHolderActions,
  selectAllPlaceholdersPrompts,
} from '../../modules/promptPlaceholders'
import {visualizePromptPlaceholder} from '../../utils/textManipulation'

export const PromptPlaceholderOverview = ({isEdit}: {isEdit?: boolean}): React.ReactNode => {
  const allPrompts = useTypedSelector((state) => selectAllPlaceholdersPrompts(state))

  const dispatch = useDispatch()
  const handleDeleteClick = (name: string) => {
    console.log('delete item', name)
    dispatch(promptPlaceHolderActions.deleteItem({name}))
  }

  return (
    <Card paddingTop={4} borderTop>
      {allPrompts.map((promptInput, _index) => {
        return (
          !promptInput.deleted && (
            <Card borderLeft padding={3} key={promptInput.name.replaceAll(' ', '-').toLowerCase()}>
              <Flex direction="row" justify="space-between">
                <Box paddingTop={2}>
                  <Inline space={4}>
                    <Label size={2}>Name ({visualizePromptPlaceholder(promptInput.name)}):</Label>
                    <Text size={2}>{promptInput.name}</Text>
                  </Inline>
                  <Inline space={3} paddingTop={2}>
                    <Label size={2}>Description:</Label>
                    <Text size={2}>{promptInput.description}</Text>
                  </Inline>
                </Box>
                {isEdit && (
                  <Box paddingTop={2}>
                    <Button
                      fontSize={1}
                      iconRight={TrashIcon}
                      padding={3}
                      radius="full"
                      text="Delete"
                      tone="critical"
                      onClick={() => handleDeleteClick(promptInput.name)}
                    />
                  </Box>
                )}
              </Flex>
            </Card>
          )
        )
      })}
    </Card>
  )
}
