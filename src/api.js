import axios from 'axios';

// f which calls the facilities list
export const getFacilities = () => {
  // NO hooks() inside a f, YES inside the component
  // const facilities = useApi(api);
  // return facilities;
  return axiosGet(
    'https://ooxvks6089.execute-api.eu-south-1.amazonaws.com/dev/test/facility'
  );
};

// f which calls the single facility neeeded
export const getFacility = uuid => {
  // const facility = useApi(api);
  // return facility;
  return axiosGet(`https://ooxvks6089.execute-api.eu-south-1.amazonaws.com/dev/test/facility/${uuid}`)
};

// general f that make an axios call
export const axiosGet = api => axios.get(api);

// useParams(): reads from the Routes and from the Link
// export: YES destructoring (object)
// default export: NO destructoring
// hooks can be used only in components
// (both normal and custom h: useParams(), useApi())
// the first letter has to be maiusc
