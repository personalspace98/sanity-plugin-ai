import {Stack} from '@sanity/ui'
import React from 'react'
import {useDispatch} from 'react-redux'

import {templateActions} from '../../modules/templates'
import {Pagination} from '../Pagination'
import {TemplatesVirtualization} from '../TemplatesVirtualization'

export const TemplatesOverview = ({isEdit = true}: {isEdit?: boolean}): React.ReactNode => {
  const dispatch = useDispatch()
  dispatch(templateActions.loadPageIndex({pageIndex: 0}))

  return (
    <Stack space={[3, 3, 4, 5]}>
      <TemplatesVirtualization isEdit={isEdit} />
      <Pagination />
    </Stack>
  )
}
