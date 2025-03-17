import {PortalProvider, studioTheme, ThemeProvider, ToastProvider} from '@sanity/ui'
import React from 'react'
import {InputProps, useColorSchemeValue} from 'sanity'

import {ReduxProvider} from '../../components/ReduxProvider'
import useVersionedClient from '../../hooks/useVersionedClient'
import {PluginConfig} from '../../index'
import Dialogs from '../Dialogs'
import {InputField} from '../InputField'
import {useRootPortalElement} from '../PluginIndex'

export const FieldIndex = (props: InputProps, apiKeys: PluginConfig): React.ReactNode => {
  const portalElement = useRootPortalElement('field-portal')
  const scheme = useColorSchemeValue()
  const sanityClient = useVersionedClient()

  return (
    <PortalProvider element={portalElement}>
      <ReduxProvider client={sanityClient} apiKeys={apiKeys}>
        <ThemeProvider scheme={scheme} theme={studioTheme}>
          <ToastProvider>
            <Dialogs />
            <InputField props={props} />
          </ToastProvider>
        </ThemeProvider>
      </ReduxProvider>
    </PortalProvider>
  )
}
