import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '@euricom/api-server/routes';

export const trpc = createReactQueryHooks<AppRouter>();
export type TQuery = keyof AppRouter['_def']['queries'];
export type TMutation = keyof AppRouter['_def']['mutations'];
