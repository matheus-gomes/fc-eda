/* ==================================== */
/* Table: transactions                  */
/* ==================================== */
CREATE TABLE transactions (
  id varchar(255) NOT NULL,
  account_id_from varchar(255) NOT NULL,
  account_id_to varchar(255) NOT NULL,
  amount int NOT NULL,
  created_at date NOT NULL,
  PRIMARY KEY (id)
);