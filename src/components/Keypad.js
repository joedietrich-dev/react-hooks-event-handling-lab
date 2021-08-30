// Code Keypad Component Here
export default function Keypad() {
  return <input type='password' onChange={
    (e) => {
      console.log('Entering password...');
    }
  }></input>
}