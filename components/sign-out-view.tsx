'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut as nextSignOut } from 'next-auth/react';

export function SignOutView() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (status === 'authenticated') {
      nextSignOut({ callbackUrl: '/' });
    } else {
      router.replace('/');
    }
  }, [status, router]);

  return <p className="layout-container py-8 text-sm text-muted-foreground">Signing out…</p>;
}
