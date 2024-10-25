import { SPECIALS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const specialsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSpecials: builder.query({
            query: () => ({
                url: `${SPECIALS_URL}`,
                method: 'GET'
            })
        }),
        addSpecial: builder.mutation({
            query: (data) => ({
                url: `${SPECIALS_URL}`,
                method: 'PUT',
                body: data
            })
        }),
        updateSpecial: builder.mutation({
            query: (data) => ({
                url: `${SPECIALS_URL}/${data.foodId}`,
                method: 'PUT',
                body: data
            })
        })
    })
})

export const {
    useGetSpecialsQuery,
    useAddSpecialMutation,
    useUpdateSpecialMutation
} = specialsApiSlice