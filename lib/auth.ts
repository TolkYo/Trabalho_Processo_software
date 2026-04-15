import { User, SessionUser } from './types';

const STORAGE_USERS = 'studyclub_users';
const STORAGE_SESSION = 'studyclub_session';

// Função segura para fazer o parse do JSON sem quebrar a aplicação
function safeJSONParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

// Recupera a lista de usuários cadastrados
function getUsers(): User[] {
  return safeJSONParse(localStorage.getItem(STORAGE_USERS), []);
}

// Salva a lista de usuários
function saveUsers(users: User[]): void {
  localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}

// Salva a sessão do usuário (apenas dados não sensíveis)
function setSession(user: SessionUser): void {
  localStorage.setItem(STORAGE_SESSION, JSON.stringify(user));
}

// Recupera a sessão atual
function getSession(): SessionUser | null {
  return safeJSONParse(localStorage.getItem(STORAGE_SESSION), null);
}

// Limpa a sessão (logout)
function clearSession(): void {
  localStorage.removeItem(STORAGE_SESSION);
}

// Função de login – retorna o usuário da sessão se credenciais válidas
export function login(email: string, password: string): SessionUser | null {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return null;
  const sessionUser: SessionUser = { name: user.name, email: user.email };
  setSession(sessionUser);
  return sessionUser;
}

// Função de cadastro – retorna true se criado com sucesso, false se email já existe
export function signup(name: string, email: string, password: string): boolean {
  const users = getUsers();
  if (users.find(u => u.email === email)) return false;
  users.push({ name, email, password });
  saveUsers(users);
  return true;
}

// Logout – remove a sessão
export function logout(): void {
  clearSession();
}

// Recupera o usuário atualmente logado
export function getCurrentUser(): SessionUser | null {
  return getSession();
}

// Verifica se há um usuário autenticado
export function isAuthenticated(): boolean {
  return getSession() !== null;
}