"use client"

import type React from "react"

import { Toaster } from "@/components/toaster"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
