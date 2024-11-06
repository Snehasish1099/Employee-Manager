import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import auth from '../containers/Authentication/AuthReducer'
import employee from '../containers/Admin/EmployeeReducer'

export default configureStore({
    reducer: {
      auth: auth,
      employee: employee
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });