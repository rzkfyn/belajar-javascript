const a = 'a'; //global variable

function b() {
  const c = 'c';//local variable only accessible on function b() and c()

  function d() {
    const e = d;//can only accessible on function d()
  }
}