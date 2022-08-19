import { fetchByUrl } from "../../utils/api";

export async function getPeopleListData(page: number, search: string) {
  return await fetchByUrl(`people?page=${page}&search=${search}`);
}