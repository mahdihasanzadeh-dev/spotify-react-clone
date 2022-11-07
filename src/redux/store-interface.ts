/* eslint-disable @typescript-eslint/naming-convention */
import type { IPlayerSliceState } from './features/features-interface.js';
import type { store } from './store.js';

export interface IStore {
  player: IPlayerSliceState
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
