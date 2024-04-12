"use client"

import { UserProfile } from "@clerk/nextjs";

// TODO: Replace this page with custom account page
export default function Account() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex items-center justify-center py-4">
        <UserProfile path="/account" routing="path"/>
      </div>
    </div>
  )
}
