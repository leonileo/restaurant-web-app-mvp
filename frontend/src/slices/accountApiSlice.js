import { ACCOUNT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const accountApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        account: builder.query({
            query: (data) => ({
                url: `${ACCOUNT_URL}`,
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${ACCOUNT_URL}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['User']
        })
    }),
});

export const { 
    useAccountQuery,
    useUpdateUserMutation
} = accountApiSlice;
