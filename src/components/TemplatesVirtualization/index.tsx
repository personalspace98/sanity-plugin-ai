import {EditIcon, TrashIcon} from '@sanity/icons'
import {Box, Button, Card, Flex, Inline, Label, Text} from '@sanity/ui'
import React from 'react'
import {useDispatch} from 'react-redux'

import useTypedSelector from '../../hooks/useTypedSelector'
import {dialogActions} from '../../modules/dialogs'
import {promptPlaceHolderActions} from '../../modules/promptPlaceholders'
import {selectAllTemplates, templateActions} from '../../modules/templates'
import {Template} from '../../types'

export const TemplatesVirtualization = ({isEdit}: {isEdit: boolean}): React.ReactNode => {
  const dispatch = useDispatch()
  const templates = useTypedSelector((state) => selectAllTemplates(state))
  const handleTemplateUpdateClick = (template: Template) => {
    template?.promptPlaceholders?.map((p) =>
      dispatch(promptPlaceHolderActions.addItem({placeholder: p})),
    )
    dispatch(templateActions.setSelectedValue({template, value: true}))
    dispatch(dialogActions.showTemplateDialog({template}))
  }

  const handleTemplateDeleteClick = (template: Template) => {
    dispatch(dialogActions.showsConfirmDeleteTemplateDialog({template}))
  }

  const handleSelectClick = (template: Template) => {
    if (isEdit) {
      dispatch(templateActions.setSelectedValue({template, value: true}))
      dispatch(dialogActions.showTemplateDialog({template}))
    } else {
      dispatch(dialogActions.showCreatePromptDialog({template}))
    }
  }

  return (
    <Box padding={4}>
      {templates.map((template: Template) => {
        return (
          template.title &&
          template.prompt && (
            <Card padding={4} key={template._id} radius={25} border>
              <Flex direction="row" gap={2} align="flex-start" justify="space-between">
                <Flex direction="column" gap={2} align="flex-start">
                  <Inline space={[3]}>
                    <Label size={2}>Title</Label>
                    <Text size={2}>{template.title}</Text>
                  </Inline>
                  <Inline space={[3]}>
                    <Label size={2}>prompt</Label>
                    <Text size={2}>{template.prompt}</Text>
                  </Inline>
                  {template._updatedAt && (
                    <Inline space={[3]}>
                      <Label size={2}>Last update:</Label>
                      <Text size={2}>{new Date(template._updatedAt).toLocaleDateString()}</Text>
                    </Inline>
                  )}
                </Flex>
                {isEdit && (
                  <div>
                    <Inline space={3}>
                      <Button
                        fontSize={2}
                        iconRight={EditIcon}
                        padding={3}
                        radius="full"
                        text="Edit"
                        tone="caution"
                        onClick={() => handleTemplateUpdateClick(template)}
                      />
                      <Button
                        fontSize={2}
                        iconRight={TrashIcon}
                        padding={3}
                        radius="full"
                        text="Delete"
                        tone="critical"
                        onClick={() => handleTemplateDeleteClick(template)}
                      />
                    </Inline>
                  </div>
                )}
                {!isEdit && (
                  <Button
                    fontSize={2}
                    padding={3}
                    radius="full"
                    text="Select"
                    tone="default"
                    onClick={() => handleSelectClick(template)}
                  />
                )}
              </Flex>
            </Card>
          )
        )
      })}
    </Box>
  )
}
