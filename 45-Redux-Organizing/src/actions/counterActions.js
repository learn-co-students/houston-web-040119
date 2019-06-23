export function increment(amount){
    return{
        type: 'INCREMENT', 
        amount
    }
}

export function decrement(amount){
    return{
        type: 'DECREMENT', 
        amount
    }
}

export function fetchBooks(){
    return dispatch => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=subject:genre&maxResults=10')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'FETCHBOOKS',
                books: data.items
            })
        })
        
    }
        
}

