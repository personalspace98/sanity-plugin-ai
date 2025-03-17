import {Dialog as SanityDialog} from '@sanity/ui'
import {ComponentProps} from 'react'

export const Dialog = (props: ComponentProps<typeof SanityDialog>) => {
  return <SanityDialog {...props} style={{position: 'fixed'}} />
}

export default Dialog
