'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getCurrentUser, logout } from '@/lib/auth';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(() => getCurrentUser());

  const handleLogout = () => {
    logout();
    setUser(null);
    router.push('/');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <Link href="/" className="font-syne font-bold text-lg text-white">Study Club</Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link href="/dashboard" className="text-muted-foreground hover:text-white text-sm">Dashboard</Link>
            <span className="text-muted-foreground text-sm">{user.email}</span>
            <button onClick={handleLogout} className="text-sm px-4 py-2 rounded-lg border border-white/10 text-muted-foreground hover:bg-white/5">Sair</button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-sm px-4 py-2 rounded-lg border border-purple-500/40 text-white hover:bg-white/5">Login</Link>
            <Link href="/signup" className="text-sm px-4 py-2 rounded-lg bg-purple-600 text-white hover:opacity-90">Cadastrar</Link>
          </>
        )}
      </div>
    </nav>
  );
}