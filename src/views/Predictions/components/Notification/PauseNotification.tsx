import React from 'react'
import { Box, Button, Text } from '@pancakeswap-libs/uikit'
import { useAppDispatch } from 'state'
import { setHistoryPaneState } from 'state/predictions'
import Notification from './Notification'

const PauseNotification = () => {
  const dispatch = useAppDispatch()

  const handleOpenHistory = () => {
    dispatch(setHistoryPaneState(true))
  }

  return (
    <Notification title="Markets Paused">
      <Box mb="24px">
        <Text as="p">Prediction markets have been paused due to an error.</Text>
        <Text as="p">All open positions have been cancelled.</Text>
        <Text as="p">
          You can reclaim any funds entered into existing positions via the History tab on this page.
        </Text>
      </Box>
      <Button variant="primary" width="100%" onClick={handleOpenHistory}>
        Show History
      </Button>
    </Notification>
  )
}

export default PauseNotification
