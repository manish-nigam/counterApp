
import { legacy_createStore } from "redux";
import counterApp from "./Reducer";
 
const Store  = legacy_createStore(counterApp)

export default Store;