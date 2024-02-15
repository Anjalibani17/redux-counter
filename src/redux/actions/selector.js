import { VISIBILITY_FILTERS } from "../../components/constant";
export const getTodosState = store => store.todos;
export const getTodoList = store =>{
    getTodosState(store)?getTodosState(store).allIDS:[];
}
export const getTodosByVisibilityFilter =(store,visibilityFilter)=>{

}