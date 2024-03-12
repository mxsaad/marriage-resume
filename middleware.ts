import { authMiddleware } from "@clerk/nextjs";
import { redirectToSignIn } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/", "/@:username", "api/webhooks/clerk"],
  ignoredRoutes: ["/api/webhooks/clerk"],
  afterAuth: async (auth, req: NextRequest) => {
    const { userId, sessionClaims } = auth;

    // For user visiting /onboarding, don't try and redirect
    if (userId && req.nextUrl.pathname === "/onboarding") {
      return NextResponse.next();
    }

    // User isn't signed in and the route is private -- redirect to sign-in
    if (!userId && !auth.isPublicRoute)
      return redirectToSignIn({ returnBackUrl: req.url });

    // Catch users who doesn't have `onboardingComplete: true` in PublicMetata
    // Redirect them to the /onboading out to complete onboarding
    if (userId && !sessionClaims?.metadata?.onboardingComplete) {
      const onboardingUrl = new URL("/onboarding", req.url);
      return NextResponse.redirect(onboardingUrl);
    }

    // User is logged in and the route is protected - let them view.
    if (userId && !auth.isPublicRoute) return NextResponse.next();

    // If the route is public, anyone can view it.
    if (auth.isPublicRoute) return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
