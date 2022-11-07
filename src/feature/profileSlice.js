import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    profileValue: ""
}



export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        fetchProfile:(state, action) => {
            
            axios({
                method:"GET",
                url: "https://fakestoreapi.com/users",
    
            }).then(res => {
                console.log(typeof(res));
                console.log("action.payload Fetching Slice");
                console.log(action.payload);
                console.log("resData Fetching slice");
                console.log(
                    res.data
                );

                const userData = res.data.filter((val) => {return val.username === action.payload.username})[0];
                console.log("userData Fetching slice");
                console.log(userData);
                // console.log(state.value);
                
                // action.payload.setUserProfile(userData);
                state.profileValue = "udin";
    
                
    
                // parentUserProfileCallback(username, password, userFirstName, userLastName, userEmail);
                
                
    
                
            })

            

        }
    }
})

export const {fetchProfile} = profileSlice.actions

export default profileSlice.reducer;