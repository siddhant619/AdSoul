import axios from 'axios'

export const fetchApps= ()=> async dispatch=>{
    try{
        const response=await axios.get('https://api.npoint.io/adf6676a313fa01f787d');
      //  console.log('applist!',response.data);
        dispatch({
            type:'FETCH_APP_LIST',
            payload:response.data
        })
    }
    catch(error){
        console.log('There was an error', error);
    }
}


export const fetchAppsandStats=()=>async (dispatch)=>{
    console.log('getting apps and stats');
    await dispatch(fetchApps());
    await dispatch(fetchStats());    
}
//Fetchstats
export const fetchStats=()=> async (dispatch)=>{
    try{
        const response=await axios.get(`https://api.npoint.io/d734975d2aee62d197ef`);
    //    console.log('stats!',response.data);
        dispatch({
            type:'FETCH_STATS',
            payload:response.data
        })
    }
    catch(error){
            console.log('There was an error', error);
            /* dispatch({
                type:'FETCH_STATS',
                payload:{}
            }) */
        
        }
}
