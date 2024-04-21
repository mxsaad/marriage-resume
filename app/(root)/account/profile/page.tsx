import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

export default async function Page() {
  redirect(`/@${auth().sessionClaims?.username}`);
}
