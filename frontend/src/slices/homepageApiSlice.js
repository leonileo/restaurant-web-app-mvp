import { HOMEPAGE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const homepageApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        specials: builder.query({
            query: () => ({
                url: `${HOMEPAGE_URL}/specials`,
            })
        }),
        foods: builder.query({
            query: () => ({
                url: `${HOMEPAGE_URL}/foods`,
            })
        }),
        events: builder.query({
            query: () => ({
                url: `${HOMEPAGE_URL}/events`,
            })
        }),
        categories: builder.query({
            query: () => ({
                url: `${HOMEPAGE_URL}/categories`,
            })
        }),
    })
})

export const {
    useSpecialsQuery,
    useFoodsQuery,
    useEventsQuery,
    useCategoriesQuery
} = homepageApiSlice