import { defineStore } from "pinia";
import { Post } from "~/types/Post";

type PostsState = {
  posts: Post[];
  search: string;
};
export const usePostsStore = defineStore("posts", {
  state: (): PostsState => ({
    posts: [],
    search: "",
  }),
  getters: {
    filteredPosts: (state) =>
      state.posts.filter((el) =>
        el.title.toLowerCase().includes(state.search.toLowerCase())
      ),
  },
  actions: {
    async fetchPosts() {
      const { data } = await useFetch("/api/posts");
      this.posts = data.value as Post[];
    },
    setSearch(value: string) {
      this.search = value;
    },
  },
});
