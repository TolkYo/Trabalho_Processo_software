// lib/auth.ts
import { User, SessionUser } from './types';

export function login(email: string, senha: string): SessionUser | null {
  return null;
}

export function cadastro(nome: string, email: string, senha: string): boolean {
  return false;
}

export function logout(): void {}

export function getCurrentUser(): SessionUser | null {
  return null;
}

export function isAuthenticated(): boolean {
  return false;
}