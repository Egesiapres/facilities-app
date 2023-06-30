import { useReducer, useEffect } from 'react';
import { initialState, useApiReducer } from './useApiReducer';

const useApi = apiFunction => {
  // BAD: multiple useState() to manage data, loading and error
  // GOOD: useReducer() hook
  // initialState: passed as the first useApiReducer() parameter
  // dispatch: f that allow send actions to the reducer
  const [state, dispatch] = useReducer(useApiReducer, initialState);

  // data fetch & fetch management
  // try & catch for the success/failure management
  // !!! {type: 'fetch_success', data: res.data}
  const fetchData = async () => {
    try {
      dispatch({ type: 'fetch_start' });
      const res = await apiFunction();
      console.log(res.data);
      dispatch({ type: 'fetch_success', payload: res.data });
    } catch (e) {
      console.log(e);
      dispatch({ type: 'fetch_error' });
    }
  };

  useEffect(() => {
    fetchData(); // []: dependency/ies
    // eslint-disable-next-line
  }, []);

  // return the state (or states) as an object
  return { state };
};

export default useApi;

// NOTES:
// 1. a custom hook is a component that doesn't return JSX
// (NO: UI, YES: function)
// 2. if I insert something inside (), NO props, YES: parameters
// 3. AIM: to have a hook (f) that fetches and manages the response
// (I just have to insert the url required from each single situation)

// FETCH:
// fetchData(): f in the body of an anonymous cb f inside the useEffect() hook
// It's the first argument of this hook
// !!!
// []: second argument of useEffect() avoids the continuous data fetching (it happens just one time)
// response: stores the values awaited from the axios call with the url specified
// data: using .data I can acces to the objects stored in response

// BAD:
// const [data, setData] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);
// const fetchData = async () => {
//   try {
//     setLoading(true);
//     const res = await axiosGet(api);
//     console.log(res.data);
//     setData(res.data); // {type: 'fetch_success', data: res.data}
//     setLoading(false);
//   } catch (e) {
//     console.log(e);
//     setError(e);
//     setLoading(false);
//   }
// };

// useEffect(() => {
//   fetchData();
// }, []);

// return { data, setData, loading, error };
