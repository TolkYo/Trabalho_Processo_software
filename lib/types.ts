// Representa um usuário completo (com senha) – usado apenas no cadastro e na busca
export type User = {
  name: string;
  email: string;
  password: string;
};

// Representa o usuário na sessão (sem senha) – o que fica armazenado no localStorage
// Usamos Omit para garantir que a senha nunca seja incluída
export type SessionUser = Omit<User, 'password'>;