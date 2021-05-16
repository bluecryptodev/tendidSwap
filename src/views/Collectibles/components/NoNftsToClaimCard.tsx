import React from 'react'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import SecondaryCard from './SecondaryCard'
import CardContent from './CardContent'

const NoNftsToClaimCard = () => {

  return (
    <SecondaryCard>
      <CardContent imgSrc="/images/present-disabled.svg">
        <Heading mb="8px">No NFTs to claim</Heading>
        <Text>
          You have no NFTs to claim at this time, but you can still see the NFTs in this series below.
        </Text>
      </CardContent>
    </SecondaryCard>
  )
}

export default NoNftsToClaimCard
