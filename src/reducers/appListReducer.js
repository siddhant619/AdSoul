export default (state=[],action)=>{
    switch (action.type) {
        case 'FETCH_APP_LIST':
            //console.log('in applistreducer', action.payload)
            return action.payload
        default:
            return state;
    }
}