import React from 'react'
import styled from 'styled-components'
import { Modal, Text, Button, OpenNewIcon, Link } from '@pancakeswap-libs/uikit'
import { BASE_EXCHANGE_URL } from 'config'
import useTheme from 'hooks/useTheme'

interface NotEnoughTokensModalProps {
  tokenSymbol: string
  onDismiss?: () => void
}

const StyledLink = styled(Link)`
  width: 100%;
`

const NotEnoughTokensModal: React.FC<NotEnoughTokensModalProps> = ({ tokenSymbol, onDismiss }) => {
  const { theme } = useTheme()

  return (
    <Modal
      title={`${tokenSymbol} required`}
      onDismiss={onDismiss}
      headerBackground={theme.colors.gradients.cardHeader}
    >
      <Text color="failure" bold>
        {`Insufficient ${tokenSymbol} balance`}
      </Text>
      <Text mt="24px">{`You’ll need ${tokenSymbol} to stake in this pool!`}</Text>
      <Text>
        {`Buy some ${tokenSymbol}, or make sure your ${tokenSymbol} isn’t in another pool or LP.`}
      </Text>
      <Button mt="24px" as="a" external href={BASE_EXCHANGE_URL}>
        {`Buy ${tokenSymbol}`}
      </Button>
      <StyledLink href="https://yieldwatch.net" external>
        <Button variant="secondary" mt="8px" width="100%">
          Locate Assets
          <OpenNewIcon color="primary" ml="4px" />
        </Button>
      </StyledLink>
      <Button variant="text" onClick={onDismiss}>
        Close window
      </Button>
    </Modal>
  )
}

export default NotEnoughTokensModal
