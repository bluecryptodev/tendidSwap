import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import CardContent from './CardContent'

const NftInWalletCard = () => {
  
  return (
    <Card>
      <CardBody>
        <CardContent imgSrc="/images/present.svg">
          <Heading mb="8px">NFT in wallet</Heading>
          <Text>Trade in your NFT for CAKE, or just keep it for your collection.</Text>
        </CardContent>
      </CardBody>
    </Card>
  )
}

export default NftInWalletCard
