import { People } from "../people/peopleConstant";

export type PeopleListData = {
  list: People[],
  page: Page,
}

export type Page = {
  nextPage: number | null,
  previousPage: number | null,
  currentPage: number,
  totalCount: number,
}