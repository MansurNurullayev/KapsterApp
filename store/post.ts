import { defineStore } from "pinia";
import { Post } from "~/types/Post";

type SinglePostState = {
  likes_count: number;
  post: Post | null;
};

export const errors = ["NOT_FOUND", "VALUE_NOT_PROVIDED"];
export const useSinglePostStore = (id: number) =>
  defineStore(`post/${id}`, {
    state: (): SinglePostState => ({
      likes_count: 0,
      post: null,
    }),
    actions: {
      mutateLikes(value: number) {
        this.likes_count = value;
      },

      async fetchSinglePost() {
        const { data } = await useFetch(`/api/posts/${id}`);
        if (typeof data.value === "string" && errors.includes(data.value))
          throw new Error(data.value);

        const post = data.value as Post;
        this.post = post;
      },
    },
  });
