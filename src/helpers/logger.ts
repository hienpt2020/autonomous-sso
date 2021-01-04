import { inject, injectable } from 'inversify';
import { Environment } from 'src/common/environment';
import { TYPES } from 'src/di/types';

export interface Logger {
  debug(message: string, metaData?: any): void;
  verbose(message: string, metaData?: any): void;
  info(message: string, metaData?: any): void;
  warn(message: string, metaData?: any): void;
  error(message: string, metaData?: any): void;
}

@injectable()
export class LoggerImpl implements Logger {
  private instance: any;

  constructor(@inject(TYPES.Environment) private readonly environment: string) {
    this.instance = console;
  }

  public debug(message: string, metaData?: any): void {
    if (this.environment === Environment.PRODUCTION) {
      return;
    }

    this.instance.log(message, this.buildMetaData(metaData));
  }

  public verbose(message: string, metaData?: any): void {
    this.instance.log(message, this.buildMetaData(metaData));
  }

  public info(message: string, metaData?: any): void {
    this.instance.log(message, this.buildMetaData(metaData));
  }

  public warn(message: string, metaData?: any): void {
    this.instance.log(message, this.buildMetaData(metaData));
  }

  public error(message: string, metaData?: any): void {
    this.instance.log(message, this.buildMetaData(metaData));
  }

  private buildMetaData(metaData: any): object {
    return metaData;
  }
}
