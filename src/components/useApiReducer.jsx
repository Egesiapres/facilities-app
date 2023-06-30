// initialState becomes the state
export const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const useApiReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_start':
      return {
        loading: true,
        data: [],
        error: false, // before
      };
    case 'fetch_success':
      return {
        ...state, // what is same as before (error: false)
        loading: false, // before
        data: action.payload,
      };
    case 'fetch_error':
      return {
        ...state,
        data: [],
        error: true,
      };
    default:
      return state;
  }
};

// NOTES:
// when useState() and when useReduce()?
// useState(): single state
// useReduce(): multiple states that tangle (one triggers another one)
// avoids a lot of useState() repetitions
// action.whateverYouWant (payload the most used)
// default: in switch, se non si verifica nessuno dei casi precedenti

// NO: if else, YES: switch
// it can continue per a big amount of other situations
// const useApiReducer = (initialState, action) => {
//   if (action.type === 'fetch_start') {
//     return {
//       loading: true,
//       data: [],
//       error: false,
//     };
//   } else if (action.type === 'fetch_success') {
//     return {
//       loading: false,
//       data: action.payload,
//       error: false,
//     };
//   } else if (action.type === 'fetch_error') {
//     return {
//       loadin: false,
//       data: [],
//       error: true,
//     };
//   }
// };
