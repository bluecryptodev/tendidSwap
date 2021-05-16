import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'

interface NotificationProps {
  title: string
}

// const BunnyDecoration = styled.div`
//   position: absolute;
//   top: -130px; // line up bunny at the top of the modal
//   left: 0px;
//   text-align: center;
//   width: 100%;
// `

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
`

const CardWrapper = styled.div`
  position: relative;
  width: 320px;
`

const Notification: React.FC<NotificationProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <CardWrapper>
        <Card>
          <CardBody>
            <Heading mb="24px">{title}</Heading>
            {children}
          </CardBody>
        </Card>
      </CardWrapper>
    </Wrapper>
  )
}

export default Notification
