export function selectBook(book) {
    // selectBook is an actionCreator, it needs to return an action, 
    // an object with type property
    // action generally has 2 values: type and payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };

}