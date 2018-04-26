function createRandom(min,max){
   if(max === void 666) {
     max = min
     min = 0
   } else{
     min = +min
     if(min != min) min = 0
   }
   
   max = +max
   if(max != max) throw new Error('The "max" is invalid.')

   return function random(){
       return Math.floor(Math.random() * (max + 1 - min)) + min 
   }
}
