import { createSlice} from "@reduxjs/toolkit";

const users =[
    {
        id:1,
        name:"Sharmila",
        email:"sharmilababucs18@gmail.com",
    },
    {
        id:2,
        name:"Shyamala",
        email:"shyamu@example.com",
    }
]

    const initialState =users;
    const reducer = createSlice({
        name:'users',
        initialState,
        reducers:{
            //create action
            create(state,action){
                state.push(action.payload);
            },
            //delete user
            deleteUser(state,action){
                return state.filter((user)=> user.if!== action.payload)
            },
            updateUser(state,action){
                const{id,name,email} = action.payload;
                const findUser = state.fing((user)=>user.if === id);
                if(findUser){
                    findUser.name = name;
                    findUser.email =email;
                }
            }
        }
    })

    export const{ create, deleteUser, updateUser} = reducer.actions;

    export default reducer.reducer;