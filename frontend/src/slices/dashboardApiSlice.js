import { DASHBOARD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const dashboardApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStatus: builder.query({
            query: () => ({
                url: `${DASHBOARD_URL}`,
            })
        }),
    })
})

export const {
    useGetStatusQuery,
} = dashboardApiSlice