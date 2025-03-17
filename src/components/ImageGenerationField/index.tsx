import React, {useEffect} from 'react'
import {ImageInputProps, PatchEvent, set} from 'sanity'

import useTypedSelector from '../../hooks/useTypedSelector'

export const ImageGenerationField = ({props}: {props: ImageInputProps}): React.ReactNode => {
  const imageRev = useTypedSelector((state) => state.generatedImage.imageUrl)
  const {onChange} = props
  useEffect(() => {
    const imageAsset = {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageRev,
      },
    }

    if (imageRev) {
      onChange(PatchEvent.from(set(imageAsset)))
    }
  }, [imageRev])
  return props.renderDefault(props)
}
