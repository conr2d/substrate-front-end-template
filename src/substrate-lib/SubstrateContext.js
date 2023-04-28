import React, { useContext } from 'react'

const SubstrateContext = React.createContext()

const useSubstrate = () => useContext(SubstrateContext)
const useSubstrateState = () => useContext(SubstrateContext).state

export { SubstrateContext, useSubstrate, useSubstrateState }
