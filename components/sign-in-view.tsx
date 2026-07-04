'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signIn as nextSignIn } from 'next-auth/react';

export function SignInView() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (status === 'authenticated') {
      router.replace('/');
    } else {
      nextSignIn('github');
    }
  }, [status, router]);

  return <p className="layout-container py-8 text-sm text-muted-foreground">Signing in…</p>;
}
