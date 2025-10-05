'use client'

import { useEffect, useState } from 'react'

export function useBrowserExtensionDetection() {
  const [hasExtensions, setHasExtensions] = useState(false)

  useEffect(() => {
    // Check for common browser extension modifications
    const checkForExtensions = () => {
      const html = document.documentElement

      // Check for common extension attributes
      const extensionAttributes = [
        'data-bybit-channel-name',
        'data-bybit-is-default-wallet',
        'data-metamask',
        'data-coinbase',
        'data-walletconnect',
        'data-extension',
      ]

      const hasExtensionAttrs = extensionAttributes.some(attr =>
        html.hasAttribute(attr),
      )

      setHasExtensions(hasExtensionAttrs)
    }

    // Check immediately
    checkForExtensions()

    // Check again after a short delay to catch extensions that load later
    const timeout = setTimeout(checkForExtensions, 1000)

    // Also listen for DOM mutations
    const observer = new MutationObserver(() => {
      checkForExtensions()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [
        'data-bybit-channel-name',
        'data-bybit-is-default-wallet',
      ],
    })

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [])

  return hasExtensions
}
