import { apiSlice } from "../apiSlice";

export const announcementApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAnnouncements: builder.query({
      query: () => "/announcement",
      providesTags: ["Announcement"],
    }),

    getAnnouncementById: builder.query({
      query: (id) => `/announcement/${id}`,
      providesTags: ["Announcement"],
    }),

    createAnnouncement: builder.mutation({
      query: (data) => ({
        url: "/announcement",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Announcement"],
    }),

    updateAnnouncement: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/announcement/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Announcement"],
    }),

    deleteAnnouncement: builder.mutation({
      query: (id) => ({
        url: `/announcement/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Announcement"],
    }),
  }),
});

export const {
  useGetAllAnnouncementsQuery,
  useGetAnnouncementByIdQuery,
  useCreateAnnouncementMutation,
  useUpdateAnnouncementMutation,
  useDeleteAnnouncementMutation,
} = announcementApi;
