import React from 'react'
import { Button, Text } from '@pancakeswap-libs/uikit'
import { useAppDispatch } from 'state'
import { setHistoryPaneState } from 'state/predictions'
import Notification from './Notification'

const ErrorNotification = () => {
  const dispatch = useAppDispatch()

  const handleOpenHistory = () => {
    dispatch(setHistoryPaneState(true))
  }
  return (
    <Notification title="Error">
      <Text as="p" mb="24px">
        This page can`&apos;`t be displayed right now due to an error. Please check back soon.
      </Text>
      <Button variant="primary" width="100%" onClick={handleOpenHistory}>
        Show History
      </Button>
    </Notification>
  )
}

export default ErrorNotification
