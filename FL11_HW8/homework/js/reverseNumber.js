function reverseNumber(a) {

  let x = 0;

  while(a) {

   x = x*10 + a%10;

   a = ~~ (a/10);

  }

  return x;
}

reverseNumber(123);
reverseNumber(-456); 
reverseNumber(10000); 