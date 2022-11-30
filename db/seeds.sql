INSERT INTO department (department_name)
VALUES
('HR'),
('Marketing'),
('Operations'),
('Finance');

INSERT INTO roles (title, salary, department_id)
VALUES
('Operations Supervisor', 95000, 3),
('Accountant', 90000, 4),
('Head of Marketing', 100000, 1),
('Frontend Engineer', 150000, 5),
('Backend Engineer', 150000, 5),
('Hiring Manager', 110000, 2),
('Project Supervisor', 85000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Steve', 'Rogers', 3, 5),
('Luke', 'Skywalker', 5, 2),
('Tony', 'Stark', 3, 1),
('Jamie', 'Lanister', 1, Null),
('Elliot', 'Porter', 5, 4),
('Nick', 'Fury', 2, 1),
('Bruce', 'Banner', 4, 3)
('Darth', 'Vader', 1, Null);



