import {Button, Grid, Label} from '@sanity/ui'
import React, {ReactNode} from 'react'
import {useDispatch} from 'react-redux'

import Dialog from '../../components/Dialog'
import {dialogActions} from '../../modules/dialogs'
import {templateActions} from '../../modules/templates'
import {DialogTemplateProperties, Template} from '../../types'

type Props = {
  children: ReactNode
  dialog: DialogTemplateProperties
}

export const DialogDeleteTemplate = (props: Props): React.ReactNode => {
  const {
    children,
    dialog: {id},
  } = props

  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(dialogActions.clearItem({id}))
  }

  const handleClick = () => {
    dispatch(templateActions.createDelete({template: {...props.dialog.template} as Template}))
    dispatch(dialogActions.clearItem({id}))
  }
  return (
    <div>
      <Dialog header="Delete template" id={id} width={3} onClose={handleClose}>
        <Grid columns={[1]} gap={[1, 1, 2, 3]} padding={4}>
          <Label>
            After you delete this template its lost forever, are you sure you want to delete this
            template?
          </Label>
          <Button
            fontSize={[1, 1, 1]}
            mode="ghost"
            padding={[3, 3, 4]}
            text="Confirm"
            tone="critical"
            onClick={handleClick}
          />
          {children}
        </Grid>
      </Dialog>
    </div>
  )
}
