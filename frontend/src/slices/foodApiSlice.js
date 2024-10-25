import { FOOD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const foodApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFoods: builder.query({
            query: () => ({
                url: `${FOOD_URL}`,
            })
        }),
        createFood: builder.mutation({
            query: (data) => ({
                url: `${FOOD_URL}`,
                method: "POST",
                body: data
            })
        }),
        updateFood: builder.mutation({
            query: (data) => ({
                url: `${FOOD_URL}/${data.foodId}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['User']
        }),
        deleteFood: builder.mutation({
            query: (foodId) => ({
                url: `${FOOD_URL}/${foodId}`,
                method: "DELETE",
            })
        }),
        uploadFoodImage: builder.mutation({
            query: (data) => ({
                url: `/apiv1/upload`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const {
    useGetFoodsQuery,
    useCreateFoodMutation,
    useUpdateFoodMutation,
    useDeleteFoodMutation,
    useUploadFoodImageMutation
} = foodApiSlice