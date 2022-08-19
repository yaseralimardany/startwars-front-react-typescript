import { getPeopleListData } from "../component/peopleList/peopleListRepository";
import { PeopleListData } from "../component/peopleList/peopleListConstant";

describe('Testing people', () => {
  test('get people by page 1 test', async () => {
    const response: any = await getPeopleListData(1, '');
    const peopleListData: PeopleListData = response.data;
    expect(peopleListData).toBeDefined();
    expect(peopleListData.page.currentPage).toBeDefined();
    expect(peopleListData.page.totalCount).toBeDefined();
    expect(peopleListData.page.currentPage).toBe(1);
    expect(peopleListData.page.previousPage).toBe(null);
    expect(peopleListData.page.nextPage).toBe(2);
  });

  test('get people by page 2 test', async () => {
    const response: any = await getPeopleListData(2, '');
    const peopleListData: PeopleListData = response.data;
    expect(peopleListData).toBeDefined();
    expect(peopleListData.page.currentPage).toBeDefined();
    expect(peopleListData.page.totalCount).toBeDefined();
    expect(peopleListData.page.currentPage).toBe(2);
    expect(peopleListData.page.previousPage).toBe(1);
    expect(peopleListData.page.nextPage).toBe(3);
  });

  test('get people by page 1 and search test', async () => {
    const response: any = await getPeopleListData(1, 'Skywalker');
    const peopleListData: PeopleListData = response.data;
    expect(peopleListData).toBeDefined();
    expect(peopleListData.page.currentPage).toBeDefined();
    expect(peopleListData.list).toBeDefined();
    expect(peopleListData.list[0].name).toBe("Luke Skywalker");
    expect(peopleListData.page.totalCount).toBeDefined();
    expect(peopleListData.page.currentPage).toBe(1);
    expect(peopleListData.page.previousPage).toBe(null);
    expect(peopleListData.page.nextPage).toBe(null);
  });

  test('get people by page 2 and search test', async () => {
    const response: any = await getPeopleListData(2, 'Skywalker');
    const peopleListData: PeopleListData = response.data;
    expect(peopleListData).toBeDefined();
    expect(peopleListData.page.currentPage).toBeDefined();
    expect(peopleListData.list).toBeDefined();
    expect(peopleListData.page.totalCount).toBeDefined();
    expect(peopleListData.page.currentPage).toBe(2);
    expect(peopleListData.page.previousPage).toBe(null);
    expect(peopleListData.page.nextPage).toBe(null);
  });
});
