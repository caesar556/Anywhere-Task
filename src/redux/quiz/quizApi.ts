import { apiSlice } from "../apiSlice";

export const quizApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuiz: builder.query({
      query: () => "/quiz",
      providesTags: ["Quiz"],
    }),

    getQuizById: builder.query({
      query: (id) => `/quiz/${id}`,
      providesTags: ["Quiz"],
    }),

    createQuiz: builder.mutation({
      query: (data) => ({
        url: "/quiz",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Quiz"],
    }),

    updateQuiz: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/quiz/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Quiz"],
    }),

    deleteQuiz: builder.mutation({
      query: (id) => ({
        url: `/quiz/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Quiz"],
    }),
  }),
});

export const {
  useGetAllQuizQuery,
  useGetQuizByIdQuery,
  useCreateQuizMutation,
  useUpdateQuizMutation,
  useDeleteQuizMutation,
} = quizApi;
