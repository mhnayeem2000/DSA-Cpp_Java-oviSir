const n =10;
const arr = [];


function init(){
    for(let i = 0; i < n; i++){
        arr[i] =Math.random();
    } 
}



        /*
            for (var i = 0; i < arr.length; i++) {
  
            // Last i elements are already in place  
            for (var j = 0; j < (arr.length - i - 1); j++) {
      
                // Checking if the item at present iteration 
                // is greater than the next iteration
                if (arr[j] > arr[j + 1]) {
      
                    // If the condition is true
                    // then swap them
                    var temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
        
        */

        let k = arr.length;  
        let temp = 0;  
         for(let i=0; i < k; i++){  
                 for(let j=1; j < (k-i); j++){  
                          if(arr[j-1] > arr[j]){  
                                 //swap elements  
                                 temp = arr[j-1];  
                                 arr[j-1] = arr[j];  
                                 arr[j] = temp;  
                         }  
                          
                 }  
         }  



for(let i = 0; i < arr.length; i++){
    const bar = document.createElement('div');
    bar.style.height =arr[i]*100+"%";
    bar.classList.add("bar");
    container.appendChild(bar);
}