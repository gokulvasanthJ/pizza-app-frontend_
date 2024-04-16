import axios from 'axios'


export const getAllPizzas = () => async dispatch => {

   dispatch({ type: 'GET_PIZZAS_REQUEST' })

   const response =  await axios.get('https://pizza-app-backend-d1tt.onrender.com/api/pizzas/getallpizzas').then((response) => {
      console.log(response)
      dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data })
   }).catch((err) => {
      dispatch({ type: 'GET_PIZZAS_FAILED', payload: err })
   })

}

   // try {
   //      const response = await axios.get('https://pizza-app-backend-five.vercel.app//api/pizzas/getallpizzas')
   //      console.log(response)
   //      dispatch({type:'GET_PIZZAS_SUCCESS', payload:response.data})

   // } catch (error) {
   //  dispatch({type:'GET_PIZZAS_FAILED', payload : error})

   // }


