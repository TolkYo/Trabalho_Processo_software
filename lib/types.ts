// lib/types.ts
export type User = {
  nome: string;
  email: string;
  senha: string;
};

export type SessionUser = Omit<User, 'senha'>;