import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// try {
//     const response = await fetch("https://shazam.p.rapidapi.com/charts/track", {
//       "method": "GET",
//       "headers": {
//         "X-RapidAPI-Key": "57cb7a0729msh90b682ec6b15c5dp1f4530jsnf5b95967a893",
//         "X-RapidAPI-Host": "shazam.p.rapidapi.com"
//       }
//     });

//     if (response.ok) {
//       const result = await response.json();
//       console.log(result);
//     }
//   } catch (err) {
//     console.error(err);
//   }

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
  }),
});

export const {
  useGetTopChartsQuery,
} = shazmCoreApi;
