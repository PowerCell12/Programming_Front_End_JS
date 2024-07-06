function extractText() {
  
  let elements = document.getElementsByTagName('li');

  let element = document.getElementsByTagName('textarea')[0];

  to_put = []

  for (let el of elements){
    to_put.push(el.innerHTML)
  }

  element.value = to_put.join("\n")
}
