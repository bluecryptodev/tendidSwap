import React from 'react'
import { Button, Modal } from '@pancakeswap-libs/uikit'
import ModalActions from 'components/ModalActions'
import styled from 'styled-components'

const WarningModal: React.FC<{ onDismiss?: () => void }> = ({ onDismiss }) => {

  return (
    <Modal title="Warning" onDismiss={onDismiss}>
      <TicketsList>
        Lottery ticket purchases are final.
        <br />
        Your CAKE will not be returned to you after you spend it to buy tickets.
        <br />
        Tickets are only valid for one lottery draw, and will be burned after the draw.
        <br />
        Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.
      </TicketsList>
      <ModalActions>
        <Button width="100%" onClick={onDismiss}>
          I understand
        </Button>
      </ModalActions>
    </Modal>
  )
}

const TicketsList = styled.div`
  text-align: left;
  overflow-y: auto;
  max-height: 400px;
  color: ${(props) => props.theme.colors.primary};
`

export default WarningModal
