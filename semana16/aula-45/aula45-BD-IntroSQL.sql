-- Criar tabela
CREATE TABLE professores_labenu (
	Id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL UNIQUE,
    idade INT 
);

-- Apaga tabela
DROP TABLE professores_labenu;

-- Insere Valores
INSERT INTO professores_labenu (id, email, nome)
VALUES
(1, "janaina@aol.com.br", "Janaina"),
(2, "anapaula@email.com.br", "Ana Paula");

INSERT INTO professores_labenu
VALUES (3, "Ghael Luz", "ghael@email.com.br", 8);

-- Deleta valores
DELETE FROM professores_labenu;