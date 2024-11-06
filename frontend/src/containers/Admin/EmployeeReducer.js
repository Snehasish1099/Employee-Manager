import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
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
            state.loading = true;
            state.error = false;
        },
    }
})

export const { getEmployeeDetails } = employeeSlice.actions;
export default employeeSlice.reducer;