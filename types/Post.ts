export type Post = {
  _type: string;
  id: number;
  uid: string;
  title: string;
  slug: string;
  short: string;
  likes_count: number;
  me_liked: boolean;
  published_at: string;
  image_preview: string;
  content: string;
};
