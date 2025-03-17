import {useSchema} from 'sanity'

import {TextField} from '../types'
import {documentSanityPrefix} from './constants'
import {capitalizeWord} from './textManipulation'

export const FilterFields = (): TextField[] => {
  const schema = useSchema()._original?.types || []
  return schema.flatMap((type: any) =>
    type.fields
      ? type.fields.filter((field: TextField) => {
          if (type.name.includes(documentSanityPrefix)) {
            return false
          }
          if ((field.type === 'string' || field.type === 'text') && !field.hidden) {
            field.value = `${capitalizeWord(type.name)}.${capitalizeWord(field.name)}`
            return field
          }
          return false
        })
      : [],
  )
}
