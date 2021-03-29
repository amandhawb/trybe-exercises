let number = 5;
let minhaString = '';

for (let index = 1; index <= 5; index +=1){
  minhaString = minhaString + '*';
  let espaco = '';
  for (let outroIndex = 0; outroIndex <= number - index; outroIndex +=1){
    espaco = espaco + ' ';
  } 
  console.log(espaco + minhaString);
}