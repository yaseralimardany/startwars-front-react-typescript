import React, { ChangeEventHandler, useEffect, useState } from 'react';
import './peopleList.css';
import { People } from "../people/peopleConstant";
import { PeopleListData } from "./peopleListConstant";
import { getPeopleListData } from "./peopleListRepository";
import { DebounceInput } from 'react-debounce-input';
import Pagination from "../pagination/pagination";

function PeopleList() {
  const [peopleListData, setPeopleListData] = useState<PeopleListData>({
    list: [],
    page: {
      nextPage: null,
      previousPage: null,
      currentPage: 1,
      totalCount: 0,
    }
  });
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPeopleListData(page, searchText)
      .then((response: any) => {
        setPeopleListData(response.data);
        setLoading(false);
      });
  }, [loading])

  const doingSearch = (value: string) => {
    setSearchText(value);
    setPage(1);
    setLoading(true);
  }

  const changePage = (value: number) => {
    setPage(value);
    setLoading(true);
  }

  const showLoading = () => {
    if (loading) {
      return <span className={"loading"}>Wait for loading data</span>;
    }

    return null;
  }

  const showEmptyData = () => {
    if (!loading && (!peopleListData || !peopleListData.list)) {
      return <h2 className={"empty_data"}>Please be sure that the Backend server running on port 3005. This warning should be removed on production</h2>;
    }

    return null;
  }


  const showTableInfo = () => {
    if (!peopleListData || !peopleListData.list) {
      return null;
    }

    return <div className={"people_list_data"}>
      {peopleListData && peopleListData.list && peopleListData.list.length === 0 && <span className={"empty_data"}>No data available.</span>}
      <div className={"search_container"}>
        <DebounceInput
          debounceTimeout={300}
          minLength={1}
          value={searchText}
          onChange={(event) => doingSearch(event.target.value)}
          type={"text"}
          placeholder={"Search your character name here"}
        />
        {showLoading()}
      </div>
      {peopleListData && peopleListData.list && peopleListData.list.length > 0 &&
      <table className={"people_list_table"}>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Eye</th>
          <th>Skin</th>
          <th>Birth Year</th>
          <th>#Film</th>
          <th>#Starships</th>
          <th>#Vehicles</th>
        </tr>
        {peopleListData.list.map((listValue: People, index) => {
          return (
            <tr key={index}>
              <td>{listValue.name}</td>
              <td>{listValue.gender}</td>
              <td>{listValue.height}</td>
              <td>{listValue.mass}</td>
              <td>{listValue.skin_color}</td>
              <td>{listValue.eye_color}</td>
              <td>{listValue.birth_year}</td>
              <td>{listValue.films?.length}</td>
              <td>{listValue.starships?.length}</td>
              <td>{listValue.vehicles?.length}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
      }
    </div>
  }

  return (
    <div className="people_list">
      <h2 className={"table_header"}>You can see all the Star Wars character here. Also you can search name</h2>
      {showEmptyData()}
      {showTableInfo()}
      <Pagination
        goToPage={(page: any) => changePage(page)}
        pageInfo={peopleListData && peopleListData.page}
      />
    </div>
  );
}

export default PeopleList;
