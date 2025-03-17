import React from 'react'

import useTypedSelector from '../../hooks/useTypedSelector'
import {Dialog} from '../../types'
import {DialogCreatePrompt} from '../DialogCreatePrompt'
import {DialogDeleteTemplate} from '../DialogDeleteTemplate'
import {DialogOverviewTemplates} from '../DialogOverviewTemplates'
import {DialogSaveTemplate} from '../DialogSaveTemplate'

const Dialogs = (): React.ReactNode => {
  const currentDialogs = useTypedSelector((state) => state.dialog.items)
  const renderDialogs = (dialogs: Dialog[], index: number) => {
    if (dialogs.length === 0 || index >= dialogs.length) {
      return null
    }

    const dialog = dialogs[index]
    const childDialogs = renderDialogs(dialogs, index + 1)
    if (dialog.type === 'modifyTemplateDialog') {
      return (
        <DialogSaveTemplate dialog={dialog} key={index}>
          {childDialogs}
        </DialogSaveTemplate>
      )
    }

    if (dialog.type === 'confirmDeleteTemplateDialog') {
      return (
        <DialogDeleteTemplate dialog={dialog} key={index}>
          {childDialogs}
        </DialogDeleteTemplate>
      )
    }

    if (dialog.type === 'dialogTemplates') {
      return (
        <DialogOverviewTemplates dialog={dialog} key={index}>
          {childDialogs}
        </DialogOverviewTemplates>
      )
    }

    if (dialog.type === 'dialogCreatePromptProperties') {
      return (
        <DialogCreatePrompt dialog={dialog} key={index}>
          {childDialogs}
        </DialogCreatePrompt>
      )
    }

    return null
  }

  return renderDialogs(currentDialogs, 0)
}

export default Dialogs
