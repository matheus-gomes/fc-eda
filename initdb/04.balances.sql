/* ==================================== */
/* Table: balances                      */
/* ==================================== */
CREATE TABLE balances (
  account_id varchar(255) NOT NULL,
  balance int NOT NULL,
  createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  updated_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (account_id)
);