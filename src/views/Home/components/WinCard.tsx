import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton } from '@pancakeswap-libs/uikit'
import { NavLink } from 'react-router-dom'
import useLotteryTotalPrizesUsd from 'hooks/useLotteryTotalPrizesUsd'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const WinCard = () => {
  const lotteryPrize = Math.round(useLotteryTotalPrizesUsd())

  return (
    <StyledFarmStakingCard>
      <CardBody>
        {/*
        <Heading color="contrast" size="lg">
          Lottery with
        </Heading>
        */}
        <Heading color="contrast" size="lg">
          Lottery is
        </Heading>
        <CardMidContent color="#7645d9">
          {/*
          {lotteryPrize !== 0 ? (
            `$${lotteryPrize.toLocaleString()}`
          ) : (
            <Skeleton animation="pulse" variant="rect" height="44px" />
          )}
          */}
          Coming Soon
        </CardMidContent>
        <Flex justifyContent="space-between">
          <Heading color="contrast" size="lg">
            Stay tuned!
          </Heading>
          {/*
          <NavLink exact activeClassName="active" to="/lottery" id="lottery-pot-cta">
            <ArrowForwardIcon mt={30} color="primary" />
          </NavLink>
          */}
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default WinCard
