import {Button, Inline, Text} from '@sanity/ui'
import React from 'react'
import {useDispatch} from 'react-redux'

import useTypedSelector from '../../hooks/useTypedSelector'
import {templateActions} from '../../modules/templates'

export const Pagination = (): React.ReactNode => {
  const dispatch = useDispatch()
  const templates = useTypedSelector((state) => state.templates)
  const shouldLoadNewPagination =
    templates.allTemplates.length > templates.pageIndex * templates.pageSize
  const handleClick = () => {
    dispatch(templateActions.loadNextPage())
  }

  const style = {
    margin: 'auto',
    display: 'block',
  }

  return (
    <Inline space={[3, 3, 4]} style={style}>
      {shouldLoadNewPagination && (
        <Button
          fontSize={[1, 1, 1]}
          mode="ghost"
          padding={[3, 3, 4]}
          text="Load more"
          onClick={handleClick}
          loading={templates.inProgress}
        />
      )}
      {!shouldLoadNewPagination && !templates.inProgress && (
        <Text size={1}>There are no {templates.allTemplates?.length ? 'more' : ''} templates</Text>
      )}
    </Inline>
  )
}
