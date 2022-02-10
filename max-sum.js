let arr = [4, 5, 8, 7, 3]

function maxSum(){
 
 let odd = 0
 let even = 0
 
 arr.forEach((el, index)=>{
   if(index%2==0){
     even+=el
   }
   else{
     odd+=el
   }
 })
 
 return even - odd?even:odd 
}

console.log(maxSum(arr))
