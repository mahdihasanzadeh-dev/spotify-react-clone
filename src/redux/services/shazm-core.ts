import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazmCoreApi = createApi({
  reducerPath: 'shazmCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY as string);
      headers.set('X-RapidAPI-Host', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_URL as string);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => ({ url: '/charts/track' }) }),
    getSongDetails: builder.query({ query: (songId) => ({ url: '/songs/get-details', params: { key: songId, locale: 'en-US' } }) }),
    getSongRelated: builder.query({ query: (artistId) => ({ url: '/songs/list-artist-top-tracks', params: { id: artistId, locale: 'en-US' } }) }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazmCoreApi;
