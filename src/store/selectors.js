import { createSelector } from 'reselect'

const web3 = state => get(state, 'reducer.connection')
export const web3Selector = createSelector(web3, w => w)

const account = state => get(state, 'reducer.account')
export const accountSelector = createSelector(account, a => a)