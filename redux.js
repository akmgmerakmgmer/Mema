const redux = require('redux')
const createStore=redux.createStore

const intialState = {
    counter : 0
}
//Reducer
const reducer = (state = intialState,action)=>{
    if(action.type==='INC_COUNTER'){
        return {
        ...state,
        counter:state.counter+1
    }
    }
    
}
//Store
const store = createStore(reducer)

//Action
store.dispatch({type:'INC_COUNTER'})
store.dispatch({type:'ADD_COUNTER',value:10})


//Subscribe
store.subscribe(()=>{

})