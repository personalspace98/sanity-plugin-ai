import {Card, Stack, Tab, TabList, TabPanel} from '@sanity/ui'
import React, {useState} from 'react'

import {CreatePromptFieldBased} from '../CreatePromptFieldBased'
import {CreatePromptPlaceholder} from '../CreatePromptPlaceholder'
import {PromptPlaceholderOverview} from '../PromptPlaceholderOverview'

export const PromptOptions = (): React.ReactNode => {
  const [id, setId] = useState('field-based-tab')

  return (
    <Card paddingTop={4}>
      <TabList space={2}>
        <Tab
          aria-controls="field-based-panel"
          id="field-based-tab"
          label="Field based"
          onClick={() => setId('field-based-tab')}
          selected={id === 'field-based-tab'}
        />
        <Tab
          aria-controls="user-input-panel"
          id="user-input-tab"
          label="User input"
          onClick={() => setId('user-input-tab')}
          selected={id === 'user-input-tab'}
        />
      </TabList>
      <TabPanel
        aria-labelledby="field-based-tab"
        hidden={id !== 'field-based-tab'}
        id="field-based-panel"
      >
        <Card border marginTop={2} padding={4} radius={2}>
          <CreatePromptFieldBased />
        </Card>
      </TabPanel>

      <TabPanel
        aria-labelledby="user-input-tab"
        hidden={id !== 'user-input-tab'}
        id="user-input-tab"
      >
        <Stack marginTop={2} padding={4}>
          <CreatePromptPlaceholder />
          <PromptPlaceholderOverview isEdit />
        </Stack>
      </TabPanel>
    </Card>
  )
}
