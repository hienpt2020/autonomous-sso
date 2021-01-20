import { interfaces } from 'inversify';
import * as React from 'react';
import { InversifyContext } from 'src/contexts/diProvider';

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
    const { container } = React.useContext(InversifyContext);

    if (!container) {
        throw new Error();
    }

    return container.get<T>(identifier);
}
