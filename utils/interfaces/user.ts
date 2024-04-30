export interface User {
  username: string;
  email: string;
  role: string;
  accountID: string;
}

export interface UserResponse {
  _id: string;
  username: string;
  email: string;
  role: string;
  accountID: string;
  __v: string;
}
