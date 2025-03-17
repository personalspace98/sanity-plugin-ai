import {useToast} from '@sanity/ui'
import {useEffect} from 'react'

import useTypedSelector from '../../hooks/useTypedSelector'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Notifications = () => {
  const items = useTypedSelector((state) => state.notifications.items)
  const toast = useToast()

  useEffect(() => {
    if (items.length > 0) {
      const lastItem = items[items.length - 1]
      toast.push({
        closable: true,
        status: lastItem.status,
        title: lastItem.title,
      })
    }
  }, [items, items.length, toast])

  return null
}

export default Notifications
