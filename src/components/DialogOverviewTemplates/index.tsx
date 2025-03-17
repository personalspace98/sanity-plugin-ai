import {Box, Grid} from '@sanity/ui'
import React, {ReactNode} from 'react'
import {useDispatch} from 'react-redux'

import {dialogActions} from '../../modules/dialogs'
import {templateActions} from '../../modules/templates'
import {DialogTemplatesProperties} from '../../types'
import Dialog from '..//Dialog'
import {SearchField} from '../SearchField'
import {TemplatesOverview} from '../TemplatesOverview'

type Props = {
  children: ReactNode
  dialog: DialogTemplatesProperties
}

export const DialogOverviewTemplates = (props: Props): React.ReactNode => {
  const {
    children,
    dialog: {id},
  } = props

  const dispatch = useDispatch()
  dispatch(templateActions.loadPageIndex({pageIndex: 0}))

  const handleClose = () => {
    dispatch(dialogActions.clearItem({id}))
  }

  return (
    <div>
      <Dialog header="Choose a template" id={id} width={3} onClose={handleClose}>
        <Grid columns={[1]} gap={[1, 1, 2, 3]} padding={4}>
          <Box padding={4}>
            <SearchField />
          </Box>
          <TemplatesOverview isEdit={false} />
          {children}
        </Grid>
      </Dialog>
    </div>
  )
}
