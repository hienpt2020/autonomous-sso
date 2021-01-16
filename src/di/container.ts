import { Container } from 'inversify';
import { Environment } from 'src/common/environment';
import { Logger, LoggerImpl } from 'src/helpers/logger';
import { TYPES } from './types';

const container = new Container();

container.bind<string>(TYPES.Environment).toConstantValue(Environment.DEVELOP);

container.bind<Logger>(TYPES.Logger).to(LoggerImpl).inSingletonScope();

// Repository
// container.bind<UserRepository>('UserRepository').to(UserRepositoryImpl).inSingletonScope();

export { container };
