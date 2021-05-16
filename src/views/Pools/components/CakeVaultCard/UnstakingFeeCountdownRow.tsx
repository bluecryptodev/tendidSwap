import React from 'react'
import { Flex, Text, useTooltip } from '@pancakeswap-libs/uikit'
import useWithdrawalFeeTimer from 'hooks/cakeVault/useWithdrawalFeeTimer'
import WithdrawalFeeTimer from './WithdrawalFeeTimer'

interface UnstakingFeeCountdownRowProps {
  account?: string
  withdrawalFee: string
  lastDepositedTime: string
  withdrawalFeePeriod?: string
}

const UnstakingFeeCountdownRow: React.FC<UnstakingFeeCountdownRowProps> = ({
  account = true,
  withdrawalFee,
  lastDepositedTime,
  withdrawalFeePeriod = '259200',
}) => {
  const feeAsDecimal = parseInt(withdrawalFee) / 100 || '-'
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Text bold mb="4px">
        {`Unstaking fee: ${feeAsDecimal}%`}
      </Text>
      <Text>
        Only applies within 3 days of staking. Unstaking after 3 days will not include a fee. Timer resets every time you stake new TENDIE in the pool.
      </Text>
    </>,
    { placement: 'bottom-start' }
  )

  const { secondsRemaining, hasPerformanceFee } = useWithdrawalFeeTimer(
    parseInt(lastDepositedTime, 10),
    parseInt(withdrawalFeePeriod, 10),
  )

  const shouldShowTimer = account && lastDepositedTime && hasPerformanceFee

  return (
    <Flex alignItems="center" justifyContent="space-between">
      {tooltipVisible && tooltip}
      <Text ref={targetRef} fontSize="14px">
        {parseInt(withdrawalFee) / 100 || '-'}%{' '}
        {shouldShowTimer
          ? 'unstaking fee until'
          : 'unstaking fee if withdrawn within 72h'}
      </Text>
      {shouldShowTimer && <WithdrawalFeeTimer secondsRemaining={secondsRemaining} />}
    </Flex>
  )
}

export default UnstakingFeeCountdownRow
