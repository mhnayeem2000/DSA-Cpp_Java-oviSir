const n =10;
const arr = [];
init();
showBars();
function init(){
    for(let i = 0; i < n; i++){
        arr[i] =Math.random();
    } 
    showBars();
}

function play(){
   const swaps= bubbleSort(arr);
   animate(swaps);
}


function animate(swaps){
    if(swaps.length == 0){
        return;
    }
    const [i,j] = swaps.shift();
    const bar1 = document.querySelectorAll('.bar')[i];
    const bar2 = document.querySelectorAll('.bar')[j];
    const height1 = bar1.style.height;
    const height2 = bar2.style.height;
    bar1.style.height = height2;
    bar2.style.height = height1;
    setTimeout(function() {
        animate(swaps);
    }, 100);
}



function bubbleSort(arr){  
    const swaps = []; 
    let k = arr.length;  
    let temp = 0;  
    for(let i=0; i < k; i++){  
        for(let j=1; j < (k-i); j++){  
            if(arr[j-1] > arr[j]){ 
                swaps.push([j-1,j]); 
                temp = arr[j-1];  
                arr[j-1] = arr[j];  
                arr[j] = temp;  
            }
        }  
    }
    return swaps;
}       


function showBars(){
    container.innerHTML ="";
    for(let i = 0; i < arr.length; i++){
        const bar = document.createElement('div');
        bar.style.height =arr[i]*100+"%";
        bar.classList.add("bar");
        container.appendChild(bar);
    }
}

