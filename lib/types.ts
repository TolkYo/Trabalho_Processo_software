// Representa um usuário completo (com senha) – usado apenas no cadastro e autenticação
export type User = {
  name: string;      
  email: string;
  password: string;  
};

// Representa o usuário na sessão (sem senha) – o que fica armazenado no localStorage
export type SessionUser = Omit<User, 'password'>;