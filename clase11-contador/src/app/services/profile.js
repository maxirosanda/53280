import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath:"profileApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://cursodapp-default-rtdb.firebaseio.com"}),
    endpoints:(builder)=>({
        putImage: builder.mutation({
            query:({image,localId})=>({
                url:`/profile/${localId}.json`,
                method:"PUT",
                body:{image}
            })
        }),
        getImage: builder.query({
            query:(localId) => `/profile/${localId}.json`
        })
    })
})

export const {usePutImageMutation,useGetImageQuery} = profileApi


