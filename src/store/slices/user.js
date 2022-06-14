// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from '../../utils/axios';

import { dispatch } from '../index';

const initialState = {
    error: null,

}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

    }
})


// Reducer
export default slice.reducer;