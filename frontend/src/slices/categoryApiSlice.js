import { CATEGORIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => ({
                url: `${CATEGORIES_URL}`,
                method: 'GET'
            })
        }),
        addCategory: builder.mutation({
            query: (data) => ({
                url : `${CATEGORIES_URL}/`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const {
    useGetCategoriesQuery,
    useAddCategoryMutation
} = categoryApiSlice