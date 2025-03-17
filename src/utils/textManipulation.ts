import {PromptFieldBased} from '../types'

export const visualizePromptPlaceholder = (name: string): string =>
  `[${name.replace(' ', '_').toUpperCase()}]`

export const visualizePromptFieldBased = (field: PromptFieldBased): string =>
  `[${field.documentType.replaceAll(' ', '_').toUpperCase()}.${field.fieldName.replaceAll(' ', '').toUpperCase()}]`

export const capitalizeWord = (value: string): string =>
  `${value.charAt(0).toUpperCase()}${value.slice(1)}`
