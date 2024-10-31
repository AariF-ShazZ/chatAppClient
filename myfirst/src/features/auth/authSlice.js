import  {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    user: null,
    token: localStorage.getItem("chatToken") || "",
    error:localStorage.getItem("chatUser") || null,
    loading: false,
}

export const registerUser = createAsyncThunk('auth/registerUser',async (userData,{rejectWithValue}) => {
    try{
        const response = await fetch("https://chat-api-9crw.onrender.com/user/register",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(userData) 
        })
        const data = await response.json()
        console.log("register fetch =>",data)
        return data
    }catch(error){
        return rejectWithValue(error);
    }
  
})

export const loginUser = createAsyncThunk("auth/loginUser",async (userData,{rejectWithValue}) => {
    console.log("loginUSER =>",userData);
    try{
        const response = await fetch("https://chat-api-9crw.onrender.com/user/login",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(userData) 
        })
        const data = await response.json()
        console.log("login fetch =>",data)
        return data
    }catch(error){
        return rejectWithValue("error => ",error)
    }

})

const authSlice = createSlice({
    name:"auth",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading  = false;
            state.error = null
        });
        builder.addCase(registerUser.rejected,  (state, action) => {
            state.loading = false;
            state.error = action.payload
        });
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            localStorage.setItem("chatToken",JSON.stringify(action.payload.token))
            localStorage.setItem("chatUser",JSON.stringify(action.payload.user))
            state.loading  = false;
            state.error = null
        });
        builder.addCase(loginUser.rejected,  (state, action) => {
            state.loading = false;
            state.error = action.payload
        });
        
    }
})

export default authSlice.reducer




