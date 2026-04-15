'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getCurrentUser, logout } from '@/lib/auth';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  // Inicializa o estado diretamente com o valor atual (sem useEffect)
  const [user, setUser] = useState(() => getCurrentUser());

  const handleLogout = () => {
    logout();
    setUser(null);
    router.push('/');
  };

  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between py-4 px-4 md:px-12 bg-[rgba(8,12,24,0.85)] backdrop-blur-md border-b border-border2">
      <Link href="/" className="font-bebas text-[22px] tracking-[2px] text-white no-underline">
        Study Club
      </Link>
      {user ? (
        <div className="flex items-center gap-3.5">
          <span className="text-sm text-muted">{user.email}</span>
          <button onClick={handleLogout} className="bg-purple text-white border-none rounded-md py-2 px-5 font-syne text-xs font-semibold cursor-pointer transition-all hover:bg-purple-light hover:-translate-y-px">
            Sair
          </button>
        </div>
      ) : (
        <Link href="/login" className="bg-purple text-white border-none rounded-md py-2 px-5 font-syne text-xs font-semibold cursor-pointer transition-all hover:bg-purple-light hover:-translate-y-px no-underline">
          Login
        </Link>
      )}
    </nav>
  );
}