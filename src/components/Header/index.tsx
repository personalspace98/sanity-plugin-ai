import {AddIcon, CogIcon} from '@sanity/icons'
import {SettingsView} from '@sanity/studio-secrets'
import {Box, Button, Flex, Inline} from '@sanity/ui'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useCurrentUser, userHasRole} from 'sanity'

import {namespaceApis, pluginConfigKeys} from '../../config/secrets'
import {dialogActions} from '../../modules/dialogs'
import {administrator} from '../../utils/constants'
import {SearchField} from '../SearchField'

export const Header = (): React.ReactNode => {
  const dispatch = useDispatch()
  const handleCreateTemplateClick = () => {
    dispatch(dialogActions.showTemplateDialog({template: null}))
  }
  return (
    <Box marginTop={2}>
      <Flex padding={4} direction="row" justify="space-between">
        <SearchField />
        <Inline space={3}>
          <Button
            fontSize={1}
            icon={AddIcon}
            tone="default"
            padding={[3, 3, 4]}
            radius="full"
            text="Create Template"
            onClick={handleCreateTemplateClick}
          />
          <AiModelSettingsView />
        </Inline>
      </Flex>
    </Box>
  )
}

const AiModelSettingsView = (): React.ReactNode => {
  const [showSettings, setShowSettings] = useState(false)
  const user = useCurrentUser()
  const isAdministrator = userHasRole(user, administrator)
  if (!isAdministrator) {
    return <></>
  }
  return (
    <div>
      <Button
        fontSize={1}
        iconRight={CogIcon}
        onClick={(e) => setShowSettings(!showSettings)}
        padding={[3, 3, 4]}
        radius="full"
        text="AI Settings"
        tone="default"
      />
      {showSettings && (
        <SettingsView
          title={'Configure your models'}
          namespace={namespaceApis}
          keys={pluginConfigKeys}
          onClose={() => {
            setShowSettings(false)
          }}
        />
      )}
    </div>
  )
}
