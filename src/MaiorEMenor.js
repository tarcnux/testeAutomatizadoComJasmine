
console.log("Teste de Software");
 
function MaiorEMenor() {
   var menor;
   var maior;
  
   //Objeto Javascript
   var clazz = {
       encontra : function(nums){
           menor = Number.MAX_VALUE; //Maior número possível
           maior = Number.MIN_VALUE; //Menor número possível
 
           nums.forEach(function(num){
               if ( num < menor) menor = num;
               else if (num > maior) maior = num;
           });
       },
       pegaMenor : function() {return menor;},
       pegaMaior : function() {return maior;}
   };
 
   return clazz;
}
