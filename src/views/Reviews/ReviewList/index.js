import React, { useRef } from "react";
import { ReviewListWrapper } from "../styled.js";
import { CloseOutlined } from "@ant-design/icons";
import Scrollbars from "../../../components/Scrollbars";

import _ from "lodash";
import { InputSearch } from "../../../components/InputSearch";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";

import InfiniteScroll from "react-infinite-scroller";
import { getReviewsReqAction } from "../../../store/actions/review.js";

export default function({ selectedId, changeReview, lastPage }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);
  const reviews = useSelector(({ review: { reviews } }) => reviews);
  const scrollRef = useRef(null);

  async function filterReviews(search) {
    setHasMore(true);
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
    setPage(1);
    dispatch(getReviewsReqAction({ search: search.toUpperCase() }));
  }

  let reviewList =
    reviews &&
    reviews.data &&
    [...Object.keys(reviews.data)].map((i) => reviews.data[i]);

  function onChange(event) {
    setSearch(event.target.value);
    filterReviews(event.target.value);
  }

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (reviewList.length > 100) {
      // message.warning("Infinite List loaded all");
      setHasMore(false);
      setLoading(false);

      return;
    }
    if (page <= lastPage) {
      dispatch(
        getReviewsReqAction({
          page: page + 1,
          search: search.toUpperCase(),
          searchScroll: true,
        })
      );
      setHasMore(true);
      setPage(page + 1);
    }

    setLoading(false);
    // clients = clients.allClients.data.concat(clients.allClients.data);
  };

  const endorsements = useSelector(
    ({ endorsement: { endorsements } }) => endorsements
  );
  function endorsementMapping(endorsementValue, review) {
    return (
      <Col className="d-flex justify-center flex-col" key={endorsementValue.id}>
        <img src={endorsementValue.path} />

        <span> {endorsementValue.name}</span>
      </Col>
    );
  }

  function singleReview(review) {
    const activeClass = selectedId === review.id ? "active" : "";
    const onChange = () => changeReview(review.id);
    const endorsementMap = _.map(review.endorsements, (x) => {
      return _.find(endorsements, ["id", x]);
    });

    return (
      <div className={`isoList ${activeClass}`} key={review.id}>
        <div
          className="isoReviewBGColor"
          style={{
            width: "5px",
            background: review.verified ? "#3ED590" : "white",
          }}
        />
        <div className="isoReviewText" onClick={onChange}>
          <h3>
            <span>{review.firstname} {review.lastname}{" "}</span>
            {review.verified ? <span className="verifiedBtn">Verified</span> : ""}
          </h3>
          <span className="isoReviewCreatedDate">{review.created_at}</span>
          <p>{review.body}</p>
          <Row>
            {_.map(endorsementMap, (x) => {
              return endorsementMapping(x, review);
            })}
          </Row>
        </div>
      </div>
    );
  }
  return (
    <ReviewListWrapper className="isoReviewListWrapper">
      <InputSearch
        placeholder="Search Reviews"
        className="isoSearchReviews"
        value={search}
        onChange={onChange}
      />
      <div className="isoReviewList" ref={scrollRef}>
        <div>
          <InfiniteScroll
            dataLength={reviewList.length}
            initialLoad={false}
            pageStart={0}
            loadMore={handleInfiniteOnLoad}
            hasMore={!loading && hasMore}
            useWindow={false}
            getScrollParent={() => scrollRef.current}
          >
            {reviewList && reviewList.length > 0 ? (
              <>{reviewList.map((review) => singleReview(review))}</>
            ) : (
              <span className="isoNoResultMsg">No review found</span>
            )}
          </InfiniteScroll>
        </div>
      </div>
    </ReviewListWrapper>
  );
}
