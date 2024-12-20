import { useEffect } from 'react'

export const useScrollToHash = () => {
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    handleScrollToHash()
    window.addEventListener('hashchange', handleScrollToHash)

    return () => {
      window.removeEventListener('hashchange', handleScrollToHash)
    }
  }, [])
}