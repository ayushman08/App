import API_CONST from '../Constants/APIConstants';

//For user login
export const userSignup = (data) => {
    console.log(data)
  return {
    type: API_CONST.N_USER_SIGNUP,
    data
  };
};





