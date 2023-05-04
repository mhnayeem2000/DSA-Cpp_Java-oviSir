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
    bubbleSort(arr);
    showBars();
}


function bubbleSort(arr){   
    let k = arr.length;  
    let temp = 0;  
    for(let i=0; i < k; i++){  
        for(let j=1; j < (k-i); j++){  
            if(arr[j-1] > arr[j]){  
                temp = arr[j-1];  
                arr[j-1] = arr[j];  
                arr[j] = temp;  
            }              
        }  
    }
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

