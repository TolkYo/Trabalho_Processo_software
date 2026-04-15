export type User = { name: string; email: string; password: string };
export type SessionUser = { name: string; email: string };

function isBrowser() { return typeof window !== 'undefined'; }
function getUsers(): User[] {
  if (!isBrowser()) return [];
  try { const raw = localStorage.getItem('sc_users'); return raw ? JSON.parse(raw) : []; } catch { return []; }
}
function saveUsers(users: User[]) { if (isBrowser()) localStorage.setItem('sc_users', JSON.stringify(users)); }
function setSession(user: SessionUser) { if (isBrowser()) localStorage.setItem('sc_session', JSON.stringify(user)); }
function getSession(): SessionUser | null {
  if (!isBrowser()) return null;
  try { const raw = localStorage.getItem('sc_session'); return raw ? JSON.parse(raw) : null; } catch { return null; }
}
export function login(email: string, password: string): SessionUser | null {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return null;
  const sessionUser = { name: user.name, email: user.email };
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
export function logout() { if (isBrowser()) localStorage.removeItem('sc_session'); }
export function getCurrentUser() { return getSession(); }