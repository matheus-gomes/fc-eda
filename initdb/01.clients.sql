/* ==================================== */
/* Table: clients                       */
/* ==================================== */
CREATE TABLE clients (
  id varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  created_at date NOT NULL,
  PRIMARY KEY (id)
);

-- Data --
INSERT INTO
  clients
VALUES
  (
    '1a5cd76f-460e-4c3b-a6b2-1f4341461d21',
    'Jane Doe',
    'jane@j.com',
    '2024-10-30'
  ),
  (
    '3382cdbd-6468-43c3-a99c-12c12600d4d7',
    'John Doe',
    'john@j.com',
    '2024-10-30'
  );