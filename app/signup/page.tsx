// app/signup/page.tsx
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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Preencha todos os campos.');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    const ok = signup(name, email, password);
    if (!ok) {
      setError('E-mail já cadastrado.');
      return;
    }

    setSuccess('Conta criada com sucesso!');
    setTimeout(() => router.push('/login'), 1000);
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
        <div className="auth-title">Criar conta</div>
        <div className="auth-sub">É grátis para começar</div>

        {error && <div className="alert error">{error}</div>}
        {success && <div className="alert success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>NOME COMPLETO</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" />
          </div>
          <div className="form-group">
            <label>EMAIL</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" />
          </div>
          <div className="form-group">
            <label>SENHA</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mínimo 6 caracteres" />
          </div>
          <div className="form-group">
            <label>CONFIRMAR SENHA</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repita a senha" />
          </div>
          <button type="submit" className="btn-submit">Criar conta</button>
        </form>

        <div className="auth-alt">
          Já tem conta?{' '}
          <Link href="/login" className="text-purple-light font-semibold hover:underline">Fazer login</Link>
        </div>
      </div>
    </div>
  );
}