// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getCurrentUser, logout } from '@/lib/auth';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(getCurrentUser());

  const handleLogout = () => {
    logout();
    setUser(null);
    router.push('/');
  };

  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between py-3 sm:py-4 px-4 sm:px-8 md:px-12 bg-[rgba(8,12,24,0.85)] backdrop-blur-md border-b border-border2">
      <Link href="/" className="font-bebas text-lg sm:text-[22px] tracking-[1px] sm:tracking-[2px] text-white no-underline whitespace-nowrap">
        Study Club
      </Link>
      {user ? (
        <div className="flex items-center gap-2 sm:gap-3.5 ml-auto">
          <span className="text-xs sm:text-sm text-muted hidden sm:inline truncate">{user.email}</span>
          <button onClick={handleLogout} className="bg-purple text-white border-none rounded-md py-1.5 sm:py-2 px-3 sm:px-5 font-syne text-[11px] sm:text-xs font-semibold cursor-pointer transition-all hover:bg-purple-light hover:-translate-y-px whitespace-nowrap">
            Sair
          </button>
        </div>
      ) : (
        <Link href="/login" className="bg-purple text-white border-none rounded-md py-1.5 sm:py-2 px-3 sm:px-5 font-syne text-[11px] sm:text-xs font-semibold cursor-pointer transition-all hover:bg-purple-light hover:-translate-y-px no-underline whitespace-nowrap ml-auto">
          Login
        </Link>
      )}
    </nav>
  );
}