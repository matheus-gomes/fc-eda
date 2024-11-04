package gateway

import "github.com/matheus-gomes/fc-ms-wallet/internal/entity"

type TransactionGateway interface {
	Create(transaction *entity.Transaction) error
}
