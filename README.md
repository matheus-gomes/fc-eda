# Full Cycle 3.0 - Desafio EDA - Event Driven Architecture

## Organização

- walletcore: Serviço em GO responsável pelas transações entre contas de clientes;
- balance: Microsserviço em NestJS responsável por retornar o balanço dos clientes;
- Banco de dados: MySQL

## Execução do projeto

```
  docker-compose up -d
```

### Acesso ao banco de dados

```
docker-compose exec mysql bash
mysql -u root -proot wallet
```

### Acesso ao Control Center

```
http://localhost:9021
```

Em "Topics", devem ser criados os tópicos "balances" e "transactions"