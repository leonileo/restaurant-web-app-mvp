import { AUTH_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/login`,
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: () => ({ 
                url: `${AUTH_URL}/logout`,
                method: 'POST',
            })
        })
    }),
});

export const { 
    useLoginMutation,
    useLogoutMutation,
} = authApiSlice;
