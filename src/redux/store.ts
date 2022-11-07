import { configureStore } from '@reduxjs/toolkit';
import { shazmCoreApi } from './services/shazm-core';
import playerReducer from './features/player-slice';

export const store = configureStore({
  reducer: {
    [shazmCoreApi.reducerPath]: shazmCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazmCoreApi.middleware),
});
