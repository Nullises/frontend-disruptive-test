export interface Content {
  title: string;
  categoryId: string;
  themeId: string;
  url: string;
  credits: string;
  userAccountId: string;
}

export interface ContentResponse {
  _id: string;
  title: string;
  categoryId: string;
  themeId: string;
  url: string;
  credits: string;
  userAccountId: string;
  created_at: string;
  updated_at: string;
  __v: string;
}
