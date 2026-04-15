import { User, SessionUser } from './types';

const STORAGE_USERS = 'studyclub_users';
const STORAGE_SESSION = 'studyclub_session';

function safeJSONParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

// Verifica se está no navegador antes de acessar localStorage
function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function getUsers(): User[] {
  if (!isBrowser()) return [];
  return safeJSONParse(localStorage.getItem(STORAGE_USERS), []);
}

function saveUsers(users: User[]): void {
  if (!isBrowser()) return;
  localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}

function setSession(user: SessionUser): void {
  if (!isBrowser()) return;
  localStorage.setItem(STORAGE_SESSION, JSON.stringify(user));
}

function getSession(): SessionUser | null {
  if (!isBrowser()) return null;
  return safeJSONParse(localStorage.getItem(STORAGE_SESSION), null);
}

function clearSession(): void {
  if (!isBrowser()) return;
  localStorage.removeItem(STORAGE_SESSION);
}

export function login(email: string, password: string): SessionUser | null {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return null;
  const sessionUser: SessionUser = { name: user.name, email: user.email };
  setSession(sessionUser);
  return sessionUser;
}

export function signup(name: string, email: string, password: string): boolean {
  const users = getUsers();
  if (users.find(u => u.email === email)) return false;
  users.push({ name, email, password });
  saveUsers(users);
  return true;
}

export function logout(): void {
  clearSession();
}

export function getCurrentUser(): SessionUser | null {
  return getSession();
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}