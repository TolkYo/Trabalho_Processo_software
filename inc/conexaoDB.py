import mysql.connector
from mysql.connector import Error

def checar_conexao_mysql(host, usuario, senha, banco_dados=None):

    conexao = None
    try:
        conexao = mysql.connector.connect(
            host=host,
            user=usuario,
            password=senha,
            database=banco_dados
        )
        
        if conexao.is_connected():
            info_servidor = conexao.get_server_info()
            print(f"Conectado com sucesso ao MySQL! Versão do servidor: {info_servidor}")
            
            if banco_dados:
                print(f"Conectado ao banco de dados: '{banco_dados}'")
                
            return True

    except Error as e:
        # Captura e exibe o erro caso a conexão falhe
        print(f"Erro ao conectar ao MySQL: {e}")
        return False

    finally:
        if conexao is not None and conexao.is_connected():
            conexao.close()
            print("Conexão encerrada.")

if __name__ == "__main__":
    MEU_HOST = "localhost"
    MEU_USUARIO = "root"
    MINHA_SENHA = "Dinobel2!"
    #MEU_BANCO = "questionario"

    status = checar_conexao_mysql(MEU_HOST, MEU_USUARIO, MINHA_SENHA)
    
    if status:
        print("\nO sistema pode prosseguir com as operações do banco.")
    else:
        print("\nO sistema não pode prosseguir sem banco de dados.")