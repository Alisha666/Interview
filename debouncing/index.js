let counter = 0;
const getData = () =>{
    //calls an API and gets data
    console.log("Fetching Data..", counter++);
}
//counter - our api will be call number of times while typing that number of times

const doSomeMagic = function (fn, d){
    return function() {
        let context    = this,
        args = arguments;

        clearTimeout(timer); //so  we are calling getdata method and we are waiting for this delay of 300ms and if
        //again the keystroke happened then we should stop calling this method by using clearTimeout
        let timer = setTimeout(() =>{
            getData.apply(context,arguments);
        },d)
    }
}

const betterfunction= doSomeMagic(getData,300)
//this function i.e. doSomeMagic don't make the call again again in each key stroke rather than it should only call when the user is paused by typing
//if the delay goes 300 ms while typing anything in input box then the getdata will be call
   
//when we typing anything in searchbox this betterfunction will be called on each and every key press event.
//and that will call dosomeMagic method and will return us a funtion which will do some processing

//doMagicfunction is the debouncing function 
//so the debouncig function takes the two argument (function and delay)
