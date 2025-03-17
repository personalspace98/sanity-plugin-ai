import {SearchIcon} from '@sanity/icons'
import {TextInput} from '@sanity/ui'
import React from 'react'
import {useDispatch} from 'react-redux'

import {templateActions} from '../../modules/templates'

export const SearchField = (): React.ReactNode => {
  const dispatch = useDispatch()
  const filterInputChanged = (filter: string) => {
    if (filter) {
      dispatch(templateActions.filterItems({filter}))
    } else {
      dispatch(templateActions.loadPageIndex({pageIndex: 0, isFilter: true}))
    }
  }
  return (
    <TextInput
      fontSize={1}
      onChange={(e) => filterInputChanged(e.currentTarget.value)}
      padding={[3, 3, 4]}
      placeholder="Search"
      icon={SearchIcon}
    />
  )
}
