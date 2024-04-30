import { Content } from "@/utils/interfaces/content";
import { BaseService } from "../baseService";

const getAll = async () => {
  const service = new BaseService<Content>("/content");
  return service.getMany();
};

const getById = async (id: string) => {
  const service = new BaseService<Content>(`/content`);
  return service.getOne(id);
};

const ContentService = {
  getAll,
  getById,
};

export default ContentService;
