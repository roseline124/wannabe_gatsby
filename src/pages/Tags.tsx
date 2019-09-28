import React from 'react'

// layouts
import BodyLayout from '../layouts/BodyLayout'

import MainCover from '../components/MainCover'

export default () => {
  return (
    <div>
      <MainCover />
      <BodyLayout>
        <h1>Tags Page</h1>
      </BodyLayout>
    </div>
  )
}
