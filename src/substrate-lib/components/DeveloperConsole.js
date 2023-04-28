// This component will simply add utility functions to your developer console.
import { useSubstrateState } from '../'

export default function DeveloperConsole() {
  const { api, apiState, keyring, keyringState } = useSubstrateState()
  if (apiState === 'READY') {
    window.api = api
  }
  if (keyringState === 'READY') {
    window.keyring = keyring
  }
  import('@polkadot/util').then(mod => window.util = mod);
  import('@polkadot/util-crypto').then(mod => window.utilCrypto = mod);

  return null
}
