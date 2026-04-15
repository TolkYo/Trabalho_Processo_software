'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const user = login(email, password);
      setLoading(false);
      if (user) {
        router.push("/dashboard");
      } else {
        setError("E-mail ou senha inválidos. Tente novamente.");
      }
    }, 400);
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-16 relative"
      style={{ background: "#080c18" }}
    >
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "#7c5af6" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-6 blur-3xl pointer-events-none"
        style={{ background: "#22d06e" }}
      />

      <div className="relative z-10 w-full max-w-md" data-testid="card-login">
        <div className="text-center mb-8">
          <Link href="/" data-testid="link-home-logo">
            <span
              className="font-syne font-bold text-2xl tracking-wide"
              style={{ color: "#f0f4ff" }}
            >
              Study Club
            </span>
          </Link>
          <p className="mt-2 text-sm" style={{ color: "#8892a4" }}>
            Bem-vindo de volta, herói!
          </p>
        </div>

        <div className="auth-card">
          <h1
            className="font-bebas text-3xl mb-6 text-center"
            style={{ color: "#f0f4ff", letterSpacing: "0.05em" }}
            data-testid="heading-login"
          >
            ENTRAR NA ARENA
          </h1>

          {error && (
            <div
              className="mb-4 px-4 py-3 rounded-lg text-sm"
              style={{
                background: "rgba(229,62,62,0.1)",
                border: "1px solid rgba(229,62,62,0.3)",
                color: "#fc8181",
              }}
              data-testid="text-login-error"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-login">
            <div>
              <label
                className="block text-xs font-syne font-semibold mb-1.5 tracking-wider"
                style={{ color: "#8892a4" }}
                htmlFor="email"
              >
                E-MAIL
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,90,246,0.25)",
                  color: "#f0f4ff",
                }}
                onFocus={e => (e.target.style.borderColor = "rgba(124,90,246,0.7)")}
                onBlur={e => (e.target.style.borderColor = "rgba(124,90,246,0.25)")}
                data-testid="input-email"
              />
            </div>

            <div>
              <label
                className="block text-xs font-syne font-semibold mb-1.5 tracking-wider"
                style={{ color: "#8892a4" }}
                htmlFor="password"
              >
                SENHA
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124,90,246,0.25)",
                  color: "#f0f4ff",
                }}
                onFocus={e => (e.target.style.borderColor = "rgba(124,90,246,0.7)")}
                onBlur={e => (e.target.style.borderColor = "rgba(124,90,246,0.25)")}
                data-testid="input-password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-syne font-bold text-sm transition-all hover:opacity-90 mt-2 disabled:opacity-60"
              style={{ background: "#7c5af6", color: "#fff", letterSpacing: "0.05em" }}
              data-testid="button-submit"
            >
              {loading ? "ENTRANDO..." : "ENTRAR NA BATALHA"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: "#8892a4" }}>
              Não tem uma conta?{" "}
              <Link href="/signup" data-testid="link-to-signup">
                <span
                  className="font-semibold hover:underline transition-all"
                  style={{ color: "#9d7dff" }}
                >
                  Cadastre-se
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}