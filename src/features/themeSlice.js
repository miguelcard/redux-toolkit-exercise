import { createSlice } from "@reduxjs/toolkit";

const initialTheme = {
    value: {
        font: 'black',
    }
};

export const themeSlice = createSlice(
    {
        name: "theme",
        initialState: initialTheme,
         reducers: {
            changeFontColor: (state, action) => {
                state.value.font = action.payload;
            }
         }
    }
);

export default themeSlice.reducer;
export const {changeFontColor } = themeSlice.actions;