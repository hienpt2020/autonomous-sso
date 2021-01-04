import { TYPES } from 'src/di/types';
import { Logger } from 'src/helpers/logger';
import { useInjection } from './useInjection';

export function useLogger(): Logger {
  return useInjection<Logger>(TYPES.Logger);
}
