import { put } from "redux-saga/effects";

 import axios from "../api.interface";
import { addDataSuccess } from "../action/addData.action";

export function* onaddData(data) {

    console.log("under saga",data)
    try{
        if(data && data.values){
            console.log("data in saga--->",data.values)
            const res = yield axios.post('/users/signup', {name:"shilpi"});

          console.log("data in saga",res)
        }
        
        //yield put(addDataSuccess(values));
    }catch(error){
        console.log(error.res)
    }
    // let values = data.values;
    // console.log("saga is here",values)

    // try {
    //     const data = yield axios.post('/users/signup', values);
    //     // const data = yield axios.post("/addData", values);
    //     console.log("data in saga",data)
    //     yield put(addDataSuccess(values));
    // } catch (error) {
    //     throw error;
    // }
}