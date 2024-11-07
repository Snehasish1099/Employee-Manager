import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    employees: [],
    employeeDetails: {},
    loading: false,
    error: false,
};

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        getEmployeeDetails: (state, action) => {
            state.employeeDetails = action.payload;
            state.loading = false;
            state.error = false;
        },
        storeEmployeesList: (state, action) => {
            state.employees = action.payload;
            state.loading = false;
            state.error = false;
        }
    }
})

export const { getEmployeeDetails, storeEmployeesList } = employeeSlice.actions;
export default employeeSlice.reducer;