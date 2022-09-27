INSERT INTO department (department_name)
VALUES
('HR'),
('Marketing'),
('Operations'),
('Finance');

INSERT INTO roles (title, salary, deparment_id)
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
('Steve', 'Rogers', 3, 3),
('Luke', 'Skywalker', 5, Null),
('Tony', 'Stark', 3, 3),
('Jamie', 'Lanister', 1, Null),
('Elliot', 'Porter', 5, 5),
('Nick', 'Fury', 2, Null),
('Bruce', 'Banner', 4,4);



