"use client"

import { useEffect } from "react"

export default function ErrorListener() {
  useEffect(() => {
    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = (event as any)?.reason

      const isEmptyObject = (val: unknown) => typeof val === "object" && val != null && !Array.isArray(val) && Object.keys(val as any).length === 0

      if (reason instanceof Error) {
        // eslint-disable-next-line no-console
        console.error("Unhandled promise rejection:", reason)
        return
      }

      // Suppress noisy overlays for opaque/benign reasons
      if (reason == null || isEmptyObject(reason) || reason instanceof Event) {
        try {
          event.preventDefault()
          // Stop other listeners from reacting (including Next's overlay handler)
          event.stopImmediatePropagation()
        } catch {}
        // eslint-disable-next-line no-console
        console.warn("Unhandled promise rejection (non-Error, suppressed):", reason)
        return
      }

      // eslint-disable-next-line no-console
      console.error("Unhandled promise rejection:", reason)
    }

    const onError = (event: ErrorEvent) => {
      // eslint-disable-next-line no-console
      console.error("Global error:", event.message, event.error, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      })
    }

    // Early guard via property handler as well
    const originalOnUnhandled = (window as any).onunhandledrejection as ((this: Window, ev: PromiseRejectionEvent) => any) | null
    ;(window as any).onunhandledrejection = (ev: PromiseRejectionEvent) => {
      const reason = (ev as any)?.reason
      const isEmptyObject = (val: unknown) => typeof val === "object" && val != null && !Array.isArray(val) && Object.keys(val as any).length === 0
      if (reason == null || isEmptyObject(reason) || reason instanceof Event) {
        try {
          ev.preventDefault()
          ev.stopImmediatePropagation()
        } catch {}
        // eslint-disable-next-line no-console
        console.warn("Unhandled promise rejection (window.onunhandledrejection suppressed):", reason)
        return undefined
      }
      return originalOnUnhandled?.call(window, ev)
    }

    window.addEventListener("unhandledrejection", onRejection, { capture: true })
    window.addEventListener("error", onError)
    return () => {
      window.removeEventListener("unhandledrejection", onRejection, { capture: true } as any)
      window.removeEventListener("error", onError)
      ;(window as any).onunhandledrejection = originalOnUnhandled || null
    }
  }, [])

  return null
}


