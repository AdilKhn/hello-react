const greeting = (state, action) =>{
  switch (action.type){
   case 'HELLO':
      console.log('HELLO action called');
      return {
          ...state,
          statement: 'Hello There'
      }
   case 'BYE': 
      return {
        ...state,
        statement: 'Goodbye!'
      }
   default:
      return state
  }
}


export default greeting;
