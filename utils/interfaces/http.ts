export interface IGlobalResponse<T> {
  Data: T;
  Error: number;
  Success: number;
}

export interface IPaginatedResponse<T> {
  currentPage: number;
  pageItems: number;
  totalItems: number;
  totalPages: number;
  result?: T[];
  users?: T[];
  Data?: T;
}
