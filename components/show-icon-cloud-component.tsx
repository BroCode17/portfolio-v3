import React from 'react'

import { images, slugs } from '@/lib/data'
import { IconCloud } from './magicui/icon-cloud'

const ShowIconCloudComponent = () => {

    const imgs = slugs?.map(
        slug =>    `https://cdn.simpleicons.org/${slug}/${slug}`
    )

  return (
    <div className='relative flex w-full h-full items-center justify-center overflow-hidden p-4 md:px-20 md:pb-20 md:pt-8 backdrop-blur-sm'>
        <IconCloud images={imgs} />
    </div>
  )
}

export default ShowIconCloudComponent