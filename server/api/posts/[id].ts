import posts from "../../posts.json";

export default defineEventHandler((event) => {
  const id: number = parseInt(event.context.params?.id || "0");
  return posts.find((el) => el.id === id);
});
