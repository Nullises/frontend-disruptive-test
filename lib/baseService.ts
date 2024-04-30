import { IGlobalResponse, IPaginatedResponse } from "@/utils/interfaces/http";
import axiosClient from "./axios";

export class BaseService<T> {
  constructor(collection: string) {
    this.collection = collection;
  }

  protected collection: string;
  public async getManyPaginated(
    params?: any,
    url: string = this.collection
  ): Promise<IGlobalResponse<IPaginatedResponse<T[]>>> {
    const response = await axiosClient.get<
      IGlobalResponse<IPaginatedResponse<T[]>>
    >(url, {
      params: params,
    });
    return response.data as IGlobalResponse<IPaginatedResponse<T[]>>; // Fix: Access the 'data' property of the response
  }

  public async getMany(params?: any, url: string = this.collection) {
    const response = await axiosClient.get<IGlobalResponse<T[]>>(`${url}`, {
      params: params,
    });
    return response.data;
  }

  public async getManyById(
    id: string,
    params?: any,
    url: string = this.collection
  ) {
    const response = await axiosClient.get<IGlobalResponse<T[]>>(
      `${url}/${id}`,
      {
        params: params,
      }
    );
    return response.data;
  }

  public async getOne(id: string, url: string = this.collection, params?: any) {
    const response = await axiosClient.get<IGlobalResponse<T>>(`${url}/${id}`, {
      params: params,
    });
    return response.data;
  }

  public async create(item: T, url: string = this.collection) {
    const response = await axiosClient.post<IGlobalResponse<T>>(`${url}`, item);
    return response.data;
  }

  public async updateById(id: string, item: T, url: string = this.collection) {
    const response = await axiosClient.put<IGlobalResponse<T>>(
      `${url}/${id}`,
      item
    );
    return response.data;
  }

  public async update(item: T, url: string = this.collection) {
    const response = await axiosClient.put<IGlobalResponse<T>>(`${url}`, item);
    return response.data;
  }

  public async delete(id: string, url: string = this.collection) {
    const response = await axiosClient.delete<IGlobalResponse<T>>(
      `${url}/${id}`
    );
    return response.data;
  }
}
