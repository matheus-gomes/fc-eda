import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Balance } from "src/app/balance/entity/balance.entity";

export const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Balance],
  migrations: ["dist/migrations/*{.ts,.js}"],
}