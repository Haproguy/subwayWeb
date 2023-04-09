import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: {
            pastKeyWord: [],
        }
    },
    reducers: {
        pastSearch: (state, action) => {
            state.value.pastKeyWord.push(action.payload);
        },
    }
})

export const { pastSearch } = searchSlice.actions;
export default searchSlice.reducer;