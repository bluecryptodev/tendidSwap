import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Prediction',
    icon: 'PredictionsIcon',
    href: '/prediction',
    status: {
      text: 'BETA',
      color: 'warning',
    },
  },
  /*
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'ITO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.tendieswap.finance',
      },
      {
        label: 'Tokens',
        href: 'https://info.tendieswap.finance/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.tendieswap.finance/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.tendieswap.finance/accounts',
      },
    ],
  },
  */
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/tendieswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.tendieswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://tendieswap.medium.com',
      },
    ],
  },
]

export default config
