import { getTodosFailure, getTodosLoading, getTodosSuccess } from "./todoSlice";

export const getTodos = (baseUrl, apiSection) => (dispatch, _, API) => {
  dispatch(getTodosLoading());
  const http = new API(baseUrl, apiSection);

  http
    .getAll()
    .then((res) => {
      dispatch(
        getTodosSuccess({
          data: res.data
        })
      );
    })
    .catch((err) => {
      dispatch(
        getTodosFailure({
          error: err.response.data
        })
      );
    });
};
