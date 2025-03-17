import {OrderDirection} from '../types'

// TODO use these options with the search / filter functionality
export const ORDER_OPTIONS: ({direction: OrderDirection; field: string} | null)[] = [
  {
    direction: 'desc',
    field: '_createdAt',
  },
  {
    direction: 'asc',
    field: '_createdAt',
  },
  {
    direction: 'desc',
    field: '_updatedAt',
  },
  {
    direction: 'asc' as OrderDirection,
    field: '_updatedAt',
  },
  {
    direction: 'asc',
    field: 'originalFilename',
  },
  {
    direction: 'desc',
    field: 'originalFilename',
  },
  // Divider
  null,
  {
    direction: 'desc',
    field: 'size',
  },
  {
    direction: 'asc',
    field: 'size',
  },
]

export const administrator: string = 'administrator'
export const documentType: string = 'document'
export const documentSanityPrefix = 'sanity.'
