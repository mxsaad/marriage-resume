import Header from "@/components/shared/header";
import { UserProfile } from "@clerk/nextjs";

export default function Account() {
  return (
    <div className="min-h-screen w-screen">
      <Header />
      <div className="flex items-center justify-center mt-16 py-12">
        <UserProfile path="/account" routing="path" />
      </div>
    </div>
  )
}

