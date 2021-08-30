// Code EyesOnMe Component Here
function handleFocus(e) {
  console.log('Good!');
}
function handleBlur(e) {
  console.log('Hey! Eyes on me!')
}

export default function EyesOnMe() {
  return <button
    onFocus={handleFocus}
    onBlur={handleBlur}
  >Eyes on me</button>
}