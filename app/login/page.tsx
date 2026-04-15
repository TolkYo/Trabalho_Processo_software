// app/login/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    }

    const user = login(email, password);
    if (!user) {
      setError('E-mail ou senha inválidos.');
      return;
    }

    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative z-10">
      <div className="geo geo-tl"></div>
      <div className="geo geo-br"></div>
      <div className="geo geo-tr"></div>
      <div className="geo geo-bl"></div>

      <div className="auth-card">
        <Link href="/" className="back-link">← Voltar ao início</Link>
        <div className="auth-logo">Study <span>Club</span></div>
        <div className="auth-title">Bem-vindo de volta 👋</div>
        <div className="auth-sub">Entre na sua conta para continuar</div>

        {error && <div className="alert error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>EMAIL</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" />
          </div>
          <div className="form-group">
            <label>SENHA</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-submit">Entrar</button>
        </form>

        <div className="auth-alt">
          Não tem conta?{' '}
          <Link href="/signup" className="text-purple-light font-semibold hover:underline">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}