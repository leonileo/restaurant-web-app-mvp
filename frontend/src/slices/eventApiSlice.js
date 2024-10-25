import { EVENT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const eventApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => ({
                url: `${EVENT_URL}`,
            })
        }),
        createEvent: builder.mutation({
            query: (data) => ({
                url: `${EVENT_URL}`,
                method: "POST",
                body: data
            })
        }),
        updateEvent: builder.mutation({
            query: (data) => ({
                url: `${EVENT_URL}/${data.eventID}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['User']
        }),
        deleteEvent: builder.mutation({
            query: (eventID) => ({
                url: `${EVENT_URL}/${eventID}`,
                method: "DELETE",
            })
        }),
        uploadEventImage: builder.mutation({
            query: (data) => ({
                url: `/apiv1/upload`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const {
    useGetEventsQuery,
    useCreateEventMutation,
    useUpdateEventMutation,
    useDeleteEventMutation,
    useUploadEventImageMutation
} = eventApiSlice