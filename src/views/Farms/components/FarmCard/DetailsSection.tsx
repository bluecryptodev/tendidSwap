import React from 'react'
import styled from 'styled-components'
import { Text, Flex, LinkExternal } from '@pancakeswap-libs/uikit'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  infoAddress,
  removed,
  totalValueFormatted,
  lpLabel,
  addLiquidityUrl,
}) => {

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>Total Liquidity:</Text>
        <Text>{totalValueFormatted}</Text>
      </Flex>
      {!removed && (
        <StyledLinkExternal href={addLiquidityUrl}>
          {`Get ${lpLabel}`}
        </StyledLinkExternal>
      )}
      <StyledLinkExternal href={bscScanAddress}>View Contract</StyledLinkExternal>
      <StyledLinkExternal href={infoAddress}>See Pair Info</StyledLinkExternal>
    </Wrapper>
  )
}

export default DetailsSection
