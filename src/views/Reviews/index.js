import React, { useEffect } from "react";

import { Layout } from "antd";
import { withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  getReviewsReqAction,
  getChangeReviewAction,
} from "../../store/actions/review";
import { getAllEndorsementsReqAction } from "../../store/actions/endorsement";
import ReviewList from "./ReviewList";
import ReviewComponentWrapper from "./styled.js";
import _ from "lodash";
const { Header, Content } = Layout;

const Reviews = ({ theme }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(({ review: { reviews } }) => reviews);
  const selectedId = useSelector(({ review: { selectedId } }) => selectedId);

  const selectedReview =
    selectedId !== undefined ? _.find(reviews, ["id", selectedId]) : null;

  // console.log(JSON.stringify(selectedReview));

  useEffect(() => {
    dispatch(getAllEndorsementsReqAction());
    dispatch(getReviewsReqAction({page:1}));
  }, [dispatch]);

  return (
    <ReviewComponentWrapper className="isomorphicReviewomponent">
      <div style={{ width: "100%" }} className="isoReviewListSidebar">
        <ReviewList
          selectedId={selectedId}
          changeReview={(id) => dispatch(getChangeReviewAction(id))}
          lastPage={reviews ? reviews.last_page : 1}
        />
      </div>
    </ReviewComponentWrapper>
  );
};

export default withTheme(Reviews);
