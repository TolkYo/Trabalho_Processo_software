// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push('/login');
      return true;
    }
    return false;
  });

  if (isChecking) return null;

  const user = getCurrentUser();
  const firstName = user!.name.split(' ')[0];

  return (
    <main className="relative min-h-screen">
      <div className="geo geo-tl"></div>
      <div className="geo geo-br"></div>
      <div className="geo geo-tr"></div>
      <div className="geo geo-bl"></div>

      <Navbar />

      <div className="min-h-[80vh] flex items-center justify-center flex-col gap-4 py-10 px-6 text-center relative z-10">
        <div className="text-5xl">🎮</div>
        <h2 className="font-bebas text-4xl tracking-[2px]">
          Olá, <span className="text-purple-light">{firstName}</span>!
        </h2>
        <p className="text-muted text-sm max-w-[340px] leading-relaxed">
          Você está logado no Study Club. O dashboard completo será desenvolvido na próxima sprint. 🚀
        </p>
        <div className="mt-2 flex gap-3 flex-wrap justify-center">
          <div className="bg-card border border-border2 rounded-lg py-4.5 px-7">
            <div className="text-2xl font-extrabold text-purple-light">0</div>
            <div className="text-[11px] text-muted mt-1">Quizzes feitos</div>
          </div>
          <div className="bg-card border border-border2 rounded-lg py-4.5 px-7">
            <div className="text-2xl font-extrabold text-green">0</div>
            <div className="text-[11px] text-muted mt-1">Batalhas vencidas</div>
          </div>
          <div className="bg-card border border-border2 rounded-lg py-4.5 px-7">
            <div className="text-2xl font-extrabold text-amber-500">Nv. 1</div>
            <div className="text-[11px] text-muted mt-1">Seu nível</div>
          </div>
        </div>
      </div>
    </main>
  );
}