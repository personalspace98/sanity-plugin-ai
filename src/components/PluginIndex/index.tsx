import {PortalProvider, studioTheme, ThemeProvider, ToastProvider} from '@sanity/ui'
import React, {useEffect, useState} from 'react'
import {Tool, useColorSchemeValue} from 'sanity'

import {ReduxProvider} from '../../components/ReduxProvider'
import useVersionedClient from '../../hooks/useVersionedClient'
import {PluginConfig} from '../../index'
import Dialogs from '../Dialogs'
import {Header} from '../Header'
import Notifications from '../Notifications'
import {TemplatesOverview} from '../TemplatesOverview'

type t<Options = any> = {
  tool: Tool<Options>
}
export const PluginIndex = (_props: t, apiKeys: PluginConfig): React.ReactNode => {
  const portalElement = useRootPortalElement('templates-portal')
  const scheme = useColorSchemeValue()
  const sanityClient = useVersionedClient()

  return (
    <PortalProvider element={portalElement}>
      <ReduxProvider client={sanityClient} apiKeys={apiKeys}>
        <ThemeProvider scheme={scheme} theme={studioTheme}>
          <ToastProvider>
            <Notifications />
            <Dialogs />
            <Header />
            <TemplatesOverview />
          </ToastProvider>
        </ThemeProvider>
      </ReduxProvider>
    </PortalProvider>
  )
}

export const useRootPortalElement = (className: string): HTMLElement => {
  const [container] = useState(() => document.createElement('div'))

  useEffect(() => {
    container.classList.add(className)
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  return container
}
