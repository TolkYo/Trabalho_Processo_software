'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signup } from '@/lib/auth';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (name.trim().length < 2) { setError('Nome deve ter pelo menos 2 caracteres.'); return; }
    if (password.length < 6) { setError('Senha deve ter pelo menos 6 caracteres.'); return; }
    if (password !== confirm) { setError('Senhas não coincidem.'); return; }
    setLoading(true);
    setTimeout(() => {
      const ok = signup(name.trim(), email, password);
      setLoading(false);
      if (ok) router.push('/login');
      else setError('E-mail já cadastrado.');
    }, 400);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 relative bg-[#080c18]">
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none bg-purple-600" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none bg-green-500" />
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/"><span className="font-syne font-bold text-2xl tracking-wide text-white">Study Club</span></Link>
          <p className="mt-2 text-sm text-muted-foreground">Crie sua conta e entre na arena!</p>
        </div>
        <div className="bg-black/40 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-md">
          <h1 className="font-bebas text-3xl mb-6 text-center text-white tracking-wide">CRIAR PERSONAGEM</h1>
          {error && <div className="mb-4 px-4 py-3 rounded-lg text-sm bg-red-500/10 border border-red-500/30 text-red-400">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Nome do herói" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 outline-none" required />
            <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 outline-none" required />
            <input type="password" placeholder="Senha (mínimo 6 caracteres)" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 outline-none" required />
            <input type="password" placeholder="Confirmar senha" value={confirm} onChange={e => setConfirm(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 outline-none" required />
            <button type="submit" disabled={loading} className="w-full py-3 rounded-xl bg-green-600 text-white font-syne font-bold hover:opacity-90 disabled:opacity-60">INICIAR AVENTURA</button>
          </form>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Já tem conta? <Link href="/login" className="text-purple-400 hover:underline">Fazer login</Link>
          </div>
        </div>
      </div>
    </main>
  );
}