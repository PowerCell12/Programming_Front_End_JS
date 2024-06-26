function char_range(first, second){
  let arr = []
  let first_char = first.charCodeAt() > second.charCodeAt() ? first.charCodeAt() : second.charCodeAt()
  let second_char = first.charCodeAt() > second.charCodeAt() ? second.charCodeAt() : first.charCodeAt()

  for (let i = second_char + 1; i  < first_char; i++){
  
    arr.push(String.fromCharCode(i));
    
  }

  return arr.join(" ");
  
}
