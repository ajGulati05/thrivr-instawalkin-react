import React from "react";
import { ClientListWrapper } from "../styled";
import { Spin } from "antd";
import { debounce } from "lodash";
import { getAllClientsReqAction } from "../../../store/actions/clients";
import { InputSearch } from "../../../components/InputSearch";
import { useDispatch } from "react-redux";

import InfiniteScroll from "react-infinite-scroller";

export default function({ clientDetails, lastPage, showUserDetails }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(2);
  const [hasMore, setHasMore] = React.useState(true);

  const filterClients = search => {
      dispatch(getAllClientsReqAction({ search: search }));
  };

  const debounceHandler = React.useCallback(debounce(filterClients, 2000), []);

  let clients =
    clientDetails && clientDetails.data && [...Object.keys(clientDetails.data)].map(i => clientDetails.data[i]);

  function onChange(event) {
    setSearch(event.target.value);
    debounceHandler(event.target.value);
  }

  const handleInfiniteOnLoad = async () => {
    setLoading(true);
    if (clientDetails.length > 100) {
      setHasMore(false);
      setLoading(false);

      return;
    }
    if (page <= lastPage) {
      await dispatch(getAllClientsReqAction(page));
      setPage(page + 1);
    }

    setLoading(false);
  };

  const handleClick = client => {
    showUserDetails(client, client.id);
  };

  return (
    <ClientListWrapper>
      <InputSearch placeholder="Client Search" value={search} onChange={onChange} />
      <div className="isoReviewList">
        {clients && clients.length > 0 ? (
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={handleInfiniteOnLoad}
            hasMore={!loading && hasMore}
            useWindow={false}
          >
            <ul>
              {clients.map((client, index) => (
                <li key={client.id} onClick={() => handleClick(client, index + 1)} style={{ cursor: "pointer" }}>
                  <span>
                    {client.firstname} <strong>{client.lastname}</strong>
                  </span>
                  {loading && hasMore && (
                    <div className="demo-loading-container">
                      <Spin />
                    </div>
                  )}
                  <br />
                </li>
              ))}
            </ul>
          </InfiniteScroll>
        ) : (
          <span className="isoNoResultMsg">No clients found</span>
        )}
      </div>
    </ClientListWrapper>
  );
}
