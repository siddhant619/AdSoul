export default (state={},action)=>{
    switch(action.type){
        case 'FETCH_STATS':
            if(action.payload)
                return action.payload;
            return state;
        default:
            return state
    }
}