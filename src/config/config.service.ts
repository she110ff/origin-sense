import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path = require('path');
require('dotenv').config();


class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) { }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('MYSQL_PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('NODE_ENV', false);
    return mode != 'development';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',

      host: this.getValue('MYSQL_HOST'),
      port: parseInt(this.getValue('MYSQL_PORT')),
      username: this.getValue('MYSQL_USER'),
      password: this.getValue('MYSQL_PASSWORD'),
      database: this.getValue('MYSQL_DATABASE'),
      entities: [path.join(__dirname, '../**/*.entity{.ts,.js}')],
      migrations: [path.join(__dirname, '../migration/*{.ts,.js}')],

      migrationsTableName: 'migration',


      cli: {
        migrationsDir: 'src/migration',
      },

      ssl: this.isProduction(),
    };
  }

}

const configService = new ConfigService(process.env)
  .ensureValues([
    'MYSQL_HOST',
    'MYSQL_PORT',
    'MYSQL_USER',
    'MYSQL_PASSWORD',
    'MYSQL_DATABASE'
  ]);

export { configService };