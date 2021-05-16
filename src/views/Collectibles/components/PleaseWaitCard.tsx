import React from 'react'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import SecondaryCard from './SecondaryCard'
import CardContent from './CardContent'

const PleaseWaitCard = () => {

  return (
    <SecondaryCard>
      <CardContent imgSrc="/images/present-alt.svg">
        <Heading mb="8px">Please wait...</Heading>
        <Text>The claiming period hasn't started yet. Check back soon.</Text>
      </CardContent>
    </SecondaryCard>
  )
}

export default PleaseWaitCard
