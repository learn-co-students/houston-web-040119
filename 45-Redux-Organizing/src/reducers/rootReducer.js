const defaultState = {
    count: 0,
    test: false,
    books: []
}

export default function rootReducer(state = defaultState, action){
    console.log("current state:", state)
    console.log("action:", action)
    console.log('--------------')

  
    switch(action.type){
      case 'INCREMENT':
        return{
            ...state,
          count: state.count + action.amount
        }
      case 'DECREMENT':
        return{
            ...state,
          count: state.count - action.amount                                                                                                                                                                                                                                                                                                            
        }
      case 'FETCHBOOKS':
          return{
              ...state,
              books: action.books
          } 
      default: 
        return{
            ...state,
          count: state.count
        }
    }

}