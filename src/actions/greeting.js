function passMe(){
  console.log('I am passed..');
  return 'Oh Boy!';
}
export const sayHelloAction = name => {
    return {
      type: 'HELLO',
      payload: name,
      runMe: passMe
    }

}
