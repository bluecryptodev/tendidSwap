import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'TendieSwap',
  description:
    'The newest AMM on BSC! Earn TENDIEs through yield farming or win it in the Lottery, then stake it in SpicyTendie Pools to earn more tokens! Initial Tendie Offerings (coming soon), NFTs (coming soon), and more, on a platform you can trust.',
  image: 'https://tendieswap.finance/images/tendies.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | TendieSwap',
  },
  '/competition': {
    title: 'Trading Battle | TendieSwap',
  },
  '/prediction': {
    title: 'Prediction | TendieSwap',
  },
  '/farms': {
    title: 'Farms | TendieSwap',
  },
  '/pools': {
    title: 'Pools | TendieSwap',
  },
  '/lottery': {
    title: 'Lottery | TendieSwap',
  },
  '/collectibles': {
    title: 'Collectibles | TendieSwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | TendieSwap',
  },
  '/teams': {
    title: 'Leaderboard | TendieSwap',
  },
  '/profile/tasks': {
    title: 'Task Center | TendieSwap',
  },
  '/profile': {
    title: 'Your Profile | TendieSwap',
  },
}
