let object1 ={
    name:"Alisha",
    city:"Ranchi"

};

let object2={
    name:"xyz"
}

object2.__proto__ =object1;
object2.city;


Date.__proto__.nextDay=function(){
    var next = new Date(this);
    next.setDate(this.getDate()+1)
    return nextDay;
}

var todayObj = Date(); //6 Jul 2023
todayObj.nextDay(); //7 Jul 2023

function outer(){
    var x=5;
    function inner(){
        console.log(x);
    }
}

<button> 0 </button>
<button> 1 </button>
<button> 2 </button>
<script>
buttons = document.getElementsByTagName('button');
for (var i = 0; i < 3; i++){
	buttons[i].onclick = function(){
		console.log(i);
	}
}
 </script>

Find pattern and write logic to print pattern.
input=17
output=17,12,7,2,-3,2,7,12,17

input =21
21,16,11,6,1,-4,1,6,11,16,21

var x= 21;
var i;
var arr=[];

for( i=x;i<0;i=i-5){
    arr[i] =i;
}
arr[i] = arr.lastIndexOf()-5;
var j = arr.lastIndexOf();

arr[i] =arr[i].reverse();

Write Program to validate token.
((ABC)DE) - Valid
)(XY)Z(A) - Invalid 
())A(  -invalid

    Write API which will return true if in given a string has 3 consecutive dots present in string at any place. 
    Only 3 not more or less than 3. 
    TRUE CASES
    s= "a.b....c...";
    s= "...";
    FALSE CASES
    s= "c....d";
    s= "a.b.c.d";
    s= "";
    s= "a.b..";
    
    var n=3;
    s= s.split();
    if(s.length <n){
        return false;
    }
    if(s.length==n){
        for(var i=0;i<n;i++){
        
            if(s[i]=='.'&& s[i+1]=='.' && s[i+2]=='.'){
                return true;
                break;
            }
        }
 
    return false;


