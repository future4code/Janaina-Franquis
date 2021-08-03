CREATE TABLE aula_51 (
id VARCHAR(255) PRIMARY KEY,
zipcode VARCHAR(255) NOT NULL,
street VARCHAR(255) NOT NULL,
number INT NOT NULL,
complement INT,
neighbourhood VARCHAR(255) NOT NULL,
city VARCHAR(255) NOT NULL,
state VARCHAR(255) NOT NULL
);

-- ALTER TABLE aula_51 CHANGE neighborhood neighbourhood VARCHAR(255) NOT NULL
 UPDATE aula_51 SET zipcode = '04130-302' WHERE id = 1; 
 SET SQL_SAFE_UPDATES = 0;


-- INSERT INTO aula_51 (`id`, `zipcode`, `street`, `number`, `complement`, `neighbourhood`, `city`, `state`) VALUES (1, 04130-302, 'Rua Sobe e Desce', 12, 10, 'São Jose', 'SP', 'SP')

SELECT * FROM aula_51
