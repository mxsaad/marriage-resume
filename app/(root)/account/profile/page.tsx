import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server';

export default async function Page() {
  redirect(`/@${auth().sessionClaims?.username}`);
} 
