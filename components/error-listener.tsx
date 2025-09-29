"use client"

import { useEffect } from "react"

export default function ErrorListener() {
  useEffect(() => {
    const onRejection = (event: PromiseRejectionEvent) => {
      // Log the real reason instead of [object Event]
      // Many libs reject with an Event object; expose details for debugging
      // eslint-disable-next-line no-console
      console.error("Unhandled promise rejection:", event.reason)
    }

    const onError = (event: ErrorEvent) => {
      // eslint-disable-next-line no-console
      console.error("Global error:", event.message, event.error, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      })
    }

    window.addEventListener("unhandledrejection", onRejection)
    window.addEventListener("error", onError)
    return () => {
      window.removeEventListener("unhandledrejection", onRejection)
      window.removeEventListener("error", onError)
    }
  }, [])

  return null
}


