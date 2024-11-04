-- ALTER TABLE student ALTER COLUMN id BIGINT AUTO_INCREMENT;
-- ALTER TABLE department ALTER COLUMN id BIGINT AUTO_INCREMENT;

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


INSERT INTO company (name, password)
VALUES
    ('Educa Brasil', 'senha123'),
    ('Saúde & Bem-Estar', 'senha456'),
    ('Tecnologia Avançada', 'senha789'),
    ('Linguagem Ativa', 'senha101'),
    ('Inova Cursos', 'senha202'),
    ('Fit & Saudável', 'senha303'),
    ('Educação Inteligente', 'senha404'),
    ('Mundo Verde', 'senha505'),
    ('StartUP Jovem', 'senha606'),
    ('Futuro Digital', 'senha707'),
    ('Empresa 1', '1234'),
    ('Empresa 2', '1234'),
    ('Empresa 3', '1234'),
    ('Empresa 4', '1234');



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
VALUES ('Administração'),
       ('Arquitetura e Urbanismo'),
       ('Biologia'),
       ('Biomedicina'),
       ('Ciência da Computação'),
       ('Ciência de Dados e Inteligência Artificial'),
       ('Ciências Biológicas'),
       ('Ciências Contábeis'),
       ('Ciências Econômicas'),
       ('Ciências Sociais'),
       ('Cinema e Audiovisual'),
       ('Direito'),
       ('Educação Física'),
       ('Engenharia Aeronáutica'),
       ('Engenharia Civil'),
       ('Engenharia de Computação'),
       ('Engenharia de Controle e Automação'),
       ('Engenharia de Energia'),
       ('Engenharia de Produção'),
       ('Engenharia de Software'),
       ('Engenharia Elétrica'),
       ('Engenharia Eletrônica e de Telecomunicação'),
       ('Engenharia Mecânica'),
       ('Engenharia Mecatrônica'),
       ('Engenharia Metalúrgica'),
       ('Engenharia Química'),
       ('Enfermagem'),
       ('Farmácia'),
       ('Filosofia'),
       ('Física'),
       ('Fisioterapia'),
       ('Fonoaudiologia'),
       ('Geografia'),
       ('História'),
       ('Jogos Digitais'),
       ('Jornalismo'),
       ('Letras'),
       ('Marketing'),
       ('Matemática'),
       ('Medicina'),
       ('Medicina Veterinária'),
       ('Nutrição'),
       ('Odontologia'),
       ('Pedagogia'),
       ('Psicologia'),
       ('Publicidade e Propaganda'),
       ('Relações Internacionais'),
       ('Relações Públicas'),
       ('Serviço Social'),
       ('Sistemas de Informação'),
       ('Tecnologia em Análise e Desenvolvimento de Sistemas'),
       ('Tecnologia em Banco de Dados'),
       ('Tecnologia em Comércio Exterior'),
       ('Tecnologia em Construção de Edifícios'),
       ('Tecnologia em Gestão Comercial'),
       ('Tecnologia em Gestão da Produção Industrial'),
       ('Tecnologia em Gestão de Recursos Humanos'),
       ('Tecnologia em Gestão Financeira'),
       ('Tecnologia em Gestão Pública'),
       ('Tecnologia em Gestão de Tecnologia da Informação'),
       ('Tecnologia em Jogos Digitais'),
       ('Tecnologia em Logística'),
       ('Tecnologia em Processos Gerenciais'),
       ('Tecnologia em Processos Metalúrgicos'),
       ('Tecnologia em Produção Audiovisual'),
       ('Tecnologia em Redes de Computadores'),
       ('Tecnologia em Segurança da Informação'),
       ('Teologia');


INSERT INTO professor (name, email, cpf, rg, department_id, balance, password)
VALUES ('Professor 1', 'professor1@example.com','12345678901', 'MG7777777', 1, 0, 'default');


INSERT INTO student (name, email, cpf, rg, educational_institution_id, course_id, balance, password)
VALUES ('Lucas Almeida', 'lucas.almeida@example.com', '12345678901', 'MG1234567', 1, 5, 1000, 'default'),
       ('Ana Beatriz Souza', 'ana.souza@example.com', '23456789012', 'MG2345678', 2, 12, 2000, 'default'),
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
       ('Fernanda Costa', 'fernanda.costa@example.com', '19234567890', 'MG1923456', 2, 32, 0, 'default'),
       ('Aluno', 'aluno@example.com', '11111111111', 'MG1111111', 2, 32, 0, 'abcd1234');

INSERT INTO admin (email, password)
VALUES ('admin@admin.com', 'admin');


INSERT INTO advantage (name, cost, description, company_id) VALUES
    ('Desconto em Cursos Preparatórios', 450, 'Desconto de 30% em cursos preparatórios oferecidos pela Educa Brasil', 1),
    ('Plano de Saúde Corporativo', 600, 'Acesso a um plano de saúde com cobertura nacional pela Saúde & Bem-Estar', 2),
    ('Acesso a Plataforma de Tecnologia', 750, 'Assinatura gratuita por 1 ano em plataforma de ensino de tecnologia da Tecnologia Avançada', 3),
    ('Curso de Idiomas Online', 500, 'Desconto de 40% em cursos de idiomas oferecidos pela Linguagem Ativa', 4),
    ('Desconto em Cursos Profissionalizantes', 300, 'Desconto de 20% em cursos profissionalizantes na Inova Cursos', 5),
    ('Academia Parceira', 400, 'Acesso gratuito a academias parceiras da Fit & Saudável', 6),
    ('Curso de Habilidades Pessoais', 250, 'Aulas gratuitas de desenvolvimento pessoal e profissional na Educação Inteligente', 7),
    ('Programa de Alimentação Saudável', 350, 'Desconto em produtos naturais e orgânicos na Mundo Verde', 8),
    ('Workshop de Empreendedorismo', 200, 'Participação em workshops de empreendedorismo oferecidos pela StartUP Jovem', 9),
    ('Assinatura de Plataforma de Cursos Digitais', 550, 'Acesso gratuito a uma plataforma de cursos digitais oferecida pelo Futuro Digital', 10);
