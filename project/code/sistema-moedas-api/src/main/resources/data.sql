ALTER TABLE student ALTER COLUMN id BIGINT AUTO_INCREMENT;
ALTER TABLE department ALTER COLUMN id BIGINT AUTO_INCREMENT;

INSERT INTO educational_institution (cnpj, name)
VALUES ('18.123.456/0001-95', 'Pontifícia Universidade Católica de Minas Gerais - PUC Minas'),
       ('23.654.789/0001-10', 'Universidade Federal de Minas Gerais - UFMG'),
       ('30.987.654/0001-22', 'Centro Universitário de Belo Horizonte - UniBH'),
       ('45.123.987/0001-33', 'Faculdade Pitágoras de Belo Horizonte'),
       ('50.765.432/0001-44', 'Centro Universitário Newton Paiva'),
       ('61.876.543/0001-55', 'Faculdade de Ciências Médicas de Minas Gerais'),
       ('72.345.678/0001-66', 'Faculdade Promove de Belo Horizonte'),
       ('81.234.567/0001-77', 'Universidade FUMEC'),
       ('92.345.678/0001-88', 'Escola Superior Dom Helder Câmara'),
       ('10.876.543/0001-99', 'Faculdade Senac Minas');


INSERT INTO department (name)
VALUES ('Departamento 1'),
       ('Departamento 2'),
       ('Departamento 3'),
       ('Departamento 4'),
       ('Departamento 5'),
       ('Departamento 6'),
       ('Departamento 7'),
       ('Departamento 8'),
       ('Departamento 9'),
       ('Departamento 10');

INSERT INTO course (name)
VALUES ('ADMINISTRACAO'),
       ('ARQUITETURA_E_URBANISMO'),
       ('BIOLOGIA'),
       ('BIOMEDICINA'),
       ('CIENCIA_DA_COMPUTACAO'),
       ('CIENCIA_DE_DADOS_E_INTELIGENCIA_ARTIFICIAL'),
       ('CIENCIAS_BIOLOGICAS'),
       ('CIENCIAS_CONTABEIS'),
       ('CIENCIAS_ECONOMICAS'),
       ('CIENCIAS_SOCIAIS'),
       ('CINEMA_E_AUDIOVISUAL'),
       ('DIREITO'),
       ('EDUCACAO_FISICA'),
       ('ENGENHARIA_AERONAUTICA'),
       ('ENGENHARIA_CIVIL'),
       ('ENGENHARIA_DE_COMPUTACAO'),
       ('ENGENHARIA_DE_CONTROLE_E_AUTOMACAO'),
       ('ENGENHARIA_DE_ENERGIA'),
       ('ENGENHARIA_DE_PRODUCAO'),
       ('ENGENHARIA_DE_SOFTWARE'),
       ('ENGENHARIA_ELETRICA'),
       ('ENGENHARIA_ELETRONICA_E_DE_TELECOMUNICACAO'),
       ('ENGENHARIA_MECANICA'),
       ('ENGENHARIA_MECATRONICA'),
       ('ENGENHARIA_METALURGICA'),
       ('ENGENHARIA_QUIMICA'),
       ('ENFERMAGEM'),
       ('FARMACIA'),
       ('FILOSOFIA'),
       ('FISICA'),
       ('FISIOTERAPIA'),
       ('FONOAUDIOLOGIA'),
       ('GEOGRAFIA'),
       ('HISTORIA'),
       ('JOGOS_DIGITAIS'),
       ('JORNALISMO'),
       ('LETAS'),
       ('MARKETING'),
       ('MATEMATICA'),
       ('MEDICINA'),
       ('MEDICINA_VETERINARIA'),
       ('NUTRICAO'),
       ('ODONTOLOGIA'),
       ('PEDAGOGIA'),
       ('PSICOLOGIA'),
       ('PUBLICIDADE_E_PROPAGANDA'),
       ('RELACOES_INTERNACIONAIS'),
       ('RELACOES_PUBLICAS'),
       ('SERVICO_SOCIAL'),
       ('SISTEMAS_DE_INFORMACAO'),
       ('TECNOLOGIA_EM_ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS'),
       ('TECNOLOGIA_EM_BANCO_DE_DADOS'),
       ('TECNOLOGIA_EM_COMERCIO_EXTERIOR'),
       ('TECNOLOGIA_EM_CONSTRUCAO_DE_EDIFICIOS'),
       ('TECNOLOGIA_EM_GESTAO_COMERCIAL'),
       ('TECNOLOGIA_EM_GESTAO_DA_PRODUCAO_INDUSTRIAL'),
       ('TECNOLOGIA_EM_GESTAO_DE_RECURSOS_HUMANOS'),
       ('TECNOLOGIA_EM_GESTAO_FINANCEIRA'),
       ('TECNOLOGIA_EM_GESTAO_PUBLICA'),
       ('TECNOLOGIA_EM_GESTAO_DE_TECNOLOGIA_DA_INFORMACAO'),
       ('TECNOLOGIA_EM_JOGOS_DIGITAIS'),
       ('TECNOLOGIA_EM_LOGISTICA'),
       ('TECNOLOGIA_EM_PROCESSOS_GERENCIAIS'),
       ('TECNOLOGIA_EM_PROCESSOS_METALURGICOS'),
       ('TECNOLOGIA_EM_PRODUCAO_AUDIOVISUAL'),
       ('TECNOLOGIA_EM_REDES_DE_COMPUTADORES'),
       ('TECNOLOGIA_EM_SEGURANCA_DA_INFORMACAO'),
       ('TEOLOGIA');

INSERT INTO professor (name, cpf, department_id, balance, password)
VALUES ('Professor 1', '12345678901', 1, 0, 'default');


INSERT INTO student (name, email, cpf, rg, educational_institution_id, course_id, balance, password)
VALUES ('Lucas Almeida', 'lucas.almeida@example.com', '12345678901', 'MG1234567', 1, 5, 0, 'default'),
       ('Ana Beatriz Souza', 'ana.souza@example.com', '23456789012', 'MG2345678', 2, 12, 0, 'default'),
       ('Pedro Henrique Santos', 'pedro.santos@example.com', '34567890123', 'MG3456789', 3, 20, 0, 'default'),
       ('Mariana Oliveira', 'mariana.oliveira@example.com', '45678901234', 'MG4567890', 1, 14, 0, 'default'),
       ('Gabriel Ferreira', 'gabriel.ferreira@example.com', '56789012345', 'MG5678901', 4, 22, 0, 'default'),
       ('Julia Pereira', 'julia.pereira@example.com', '67890123456', 'MG6789012', 5, 28, 0, 'default'),
       ('Rafael Costa', 'rafael.costa@example.com', '78901234567', 'MG7890123', 6, 35, 0, 'default'),
       ('Isabela Rodrigues', 'isabela.rodrigues@example.com', '89012345678', 'MG8901234', 2, 43, 0, 'default'),
       ('Bruno Martins', 'bruno.martins@example.com', '90123456789', 'MG9012345', 3, 18, 0, 'default'),
       ('Larissa Silva', 'larissa.silva@example.com', '01234567890', 'MG0123456', 1, 27, 0, 'default'),
       ('Mateus Lima', 'mateus.lima@example.com', '10234567891', 'MG1023456', 4, 10, 0, 'default'),
       ('Camila Rocha', 'camila.rocha@example.com', '11234567892', 'MG1123456', 5, 50, 0, 'default'),
       ('Felipe Nunes', 'felipe.nunes@example.com', '12234567893', 'MG1223456', 6, 3, 0, 'default'),
       ('Aline Cardoso', 'aline.cardoso@example.com', '13234567894', 'MG1323456', 2, 38, 0, 'default'),
       ('Rodrigo Barros', 'rodrigo.barros@example.com', '14234567895', 'MG1423456', 3, 19, 0, 'default'),
       ('Patricia Mendes', 'patricia.mendes@example.com', '15234567896', 'MG1523456', 1, 6, 0, 'default'),
       ('Tiago Freitas', 'tiago.freitas@example.com', '16234567897', 'MG1623456', 4, 45, 0, 'default'),
       ('Vanessa Ribeiro', 'vanessa.ribeiro@example.com', '17234567898', 'MG1723456', 5, 61, 0, 'default'),
       ('Diego Araujo', 'diego.araujo@example.com', '18234567899', 'MG1823456', 6, 8, 0, 'default'),
       ('Fernanda Costa', 'fernanda.costa@example.com', '19234567890', 'MG1923456', 2, 32, 0, 'default');
