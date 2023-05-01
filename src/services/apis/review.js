import API from "./utils/API";

const api = new API();
const prefix = "/therapist";

// Get Therapist Reviews

const getTherapistReviews = (params) =>
{  
  const pageNumber = params.page? `page=${params.page}&` : '';
  const filter = params.search? `filter[search]=${params.search}` : '';

  return api
    .callApi({
      url: `${prefix}/reviews?${pageNumber}${filter}`,      
      method: "get",
    })
    .then((result) => result);
  }
    


export default {
  getTherapistReviews,
};
