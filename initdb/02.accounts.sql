/* ==================================== */
/* Table: accounts                      */
/* ==================================== */
CREATE TABLE accounts (
  id varchar(255) NOT NULL,
  client_id varchar(255) NOT NULL,
  balance float NOT NULL,
  created_at date NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO
  `accounts`
VALUES
  (
    'f2cc30eb-b74d-4a07-ac76-1eab5d57f076',
    '1a5cd76f-460e-4c3b-a6b2-1f4341461d21',
    1000,
    '2024-10-30'
  ),
  (
    '74918e9e-746a-4e24-b3e7-ccdf1bb5d473',
    '3382cdbd-6468-43c3-a99c-12c12600d4d7',
    1000,
    '2024-10-30'
  );