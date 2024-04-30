import { BaseService } from "../baseService";
import { User } from "@/utils/interfaces/user";

const getAll = async () => {
  const service = new BaseService<User>("/users");
  return service.getMany();
};

const getById = async (id: string) => {
  const service = new BaseService<User>(`/users`);
  return service.getOne(id);
};

const editUser = async (data: User, id: string) => {
  const service = new BaseService<User>(`/users`);
  return service.updateById(id, data);
};

const addUser = async (data: User) => {
  const service = new BaseService<User>(`/users`);
  return service.create(data);
};

const UserService = {
  getAll,
  getById,
  editUser,
  addUser,
};

export default UserService;
