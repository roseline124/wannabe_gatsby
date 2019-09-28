import React from 'react'

// layouts
import BodyLayout from '../layouts/BodyLayout'

// components
import Title from '../components/Title'
import MainCover from '../components/MainCover'

export default () => {
  return (
    <div>
      <MainCover />

      <BodyLayout>
        <Title />
      </BodyLayout>
    </div>
  )
}
