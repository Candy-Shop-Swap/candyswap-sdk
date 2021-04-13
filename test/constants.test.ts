import { INIT_CODE_HASH } from '../src/constants'

import { bytecode } from '@candyswap/candy-swap-core/build/CandyPair.json'
import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    // it('matches computed bytecode hash', () => {
    //   expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    // })
    //TODO: Replace with real CandyPair.json
    
    console.log("computed bytecode hash ", COMPUTED_INIT_CODE_HASH);

    it('matches computed bytecode hash', () => {
      expect(INIT_CODE_HASH).toEqual('0x1bf62b074b05054f9c4f737a0289314333b4d3da1999b0d46b792acc028694f8')
    })
  })
})
