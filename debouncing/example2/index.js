let counter = 0;
function getData(){
    console.log("Fetching Data"+counter++);
}

function myDebounce(callback,delay){
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        else{
            setTimeout(() =>{
                callback();
            },delay)
        }
    }
}

const newFun = myDebounce(getData,100);