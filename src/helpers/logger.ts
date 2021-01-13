import reactotron from "src/config/configReactoron";

export interface Logger {
  debug(message?: any, ...optionalParams: any[]): void;
  verbose(message?: any, ...optionalParams: any[]): void;
  info(message?: any, ...optionalParams: any[]): void;
  warn(message?: any, ...optionalParams: any[]): void;
  error(message?: any, ...optionalParams: any[]): void;
}

export class LoggerImpl implements Logger {
  private instance?: Console = __DEV__ ? reactotron : undefined

  public debug(message?: any, ...optionalParams: any[]): void {

    this.instance?.debug(message, this.buildMetaData(optionalParams));
  }

  public verbose(message?: any, ...optionalParams: any[]): void {
    this.debug(message, message)
  }

  public info(message?: any, ...optionalParams: any[]): void {
    this.instance?.info(message, this.buildMetaData(optionalParams));
  }

  public warn(message?: any, ...optionalParams: any[]): void {
    this.instance?.warn(message, this.buildMetaData(optionalParams));
  }

  public error(message?: any, ...optionalParams: any[]): void {
    this.instance?.error(message, this.buildMetaData(optionalParams));
  }

  private buildMetaData(metaData: any): any[] {
    return metaData;
  }
}
export const Log: Logger = new LoggerImpl()