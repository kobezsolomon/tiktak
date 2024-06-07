let continer = document.querySelector('.maincontiner');
let inside1 = document.querySelector('.inside1');
let inside2 = document.querySelector('.inside2');
let inside3 = document.querySelector('.inside3');
let inside4 = document.querySelector('.inside4');
let inside5 = document.querySelector('.inside5');
let inside6 = document.querySelector('.inside6');
let inside7 = document.querySelector('.inside7');
let inside8 = document.querySelector('.inside8');
let inside9 = document.querySelector('.inside9');

let ontop = document.querySelector('.ontop');
let tryagain = document.querySelector('.tryagain');
ontop.style.display="none";


let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let line4 = document.querySelector('.line4');
let line5 = document.querySelector('.line5');
let line6 = document.querySelector('.line6');
let line7 = document.querySelector('.line7');
let line8 = document.querySelector('.line8');





let  gameo = document.querySelector('.oneo1');
let  gamex = document.querySelector('.twox1');
let  gameo2 = document.querySelector('.oneo2');
let  gamex2 = document.querySelector('.twox2');
let  gameo3 = document.querySelector('.oneo3');
let  gamex3 = document.querySelector('.twox3');
let  gameo4 = document.querySelector('.oneo4');
let  gamex4 = document.querySelector('.twox4');
let  gameo5 = document.querySelector('.oneo5');
let  gamex5 = document.querySelector('.twox5');
let  gameo6 = document.querySelector('.oneo6');
let  gamex6 = document.querySelector('.twox6');
let  gameo7 = document.querySelector('.oneo7');
let  gamex7 = document.querySelector('.twox7');
let  gameo8 = document.querySelector('.oneo8');
let  gamex8 = document.querySelector('.twox8');
let  gameo9 = document.querySelector('.oneo9');
let  gamex9 = document.querySelector('.twox9');
let overallvalue =["","","","","","","","",""]  ;
let value = 0 ;
let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
function clickedxoro() {
    if (value == 0 && count == 0){
        gamex.style.display= "block";
        gameo.style.display= "none";
        value = 1;
        count++;
        console.log(value , "value");
        console.log(count , "count" );
        overallvalue[0]="x";
        console.log(overallvalue);
        console.log("frist div");
    } 
    else
    if (value === 1 && count === 0){
        gamex.style.display= "none";
        gameo.style.display= "block";
        count++;
        value = 0;
        console.log(value , "value");
        console.log(count , "count" );
        overallvalue[0]="o";
        console.log(overallvalue);
        console.log("frist div");
    }
    check ()
  
} 
//   22222

function clickedxorototwo() {
    if (value == 0 && count2 === 0){
        gamex2.style.display= "block";
        gameo2.style.display= "none";
        value = 1;
        count2++;
        console.log(value , "value");
        console.log(count , "count2" );
        overallvalue[1]="x";
        console.log(overallvalue);
        console.log("secound div");
    }  
    else if
     (value == 1 && count2 === 0){
        gamex2.style.display= "none";
        gameo2.style.display= "block";
        value = 0;
        count2++;
        console.log(value , "value");
        console.log(count , "count2" );
        overallvalue[1]="o";
        console.log(overallvalue);
        console.log("secound div");
        
    }
    check ()
}
// 33333


function clickedxoro3() {
    if (value == 0 && count3 === 0){
        gamex3.style.display= "block";
        gameo3.style.display= "none";
        value = 1;
        count3++;
        console.log(value , "value");
        console.log(count , "count3" );
        overallvalue[2]="x";
        console.log(overallvalue);
        console.log("3und div");
    } 
     
    else if
     (value == 1 && count3 === 0){
        gamex3.style.display= "none";
        gameo3.style.display= "block";
        value = 0;
        count3++;
        console.log(value , "value");
        console.log(count , "count3" );
        overallvalue[2]="o";
        console.log(overallvalue);
        console.log("3d div");
        
    }
    check ()
}
// 444
function clickedxoro4() {
    if (value == 0 && count4 === 0){
        gamex4.style.display= "block";
        gameo4.style.display= "none";
        value = 1;
        count4++;
        console.log(value , "value");
        console.log(count , "count4" );
        overallvalue[3]="x";
        console.log(overallvalue);
        console.log("5 div");
    }  
    else if
     (value == 1 && count4 === 0){
        gamex4.style.display= "none";
        gameo4.style.display= "block";
        value = 0;
        count4++;
        console.log(value , "value");
        console.log(count , "count4" );
        overallvalue[3]="o";
        console.log(overallvalue);
        console.log("5 div");
        
    }
    check ()
}
// 555
function clickedxoro5() {
    if (value == 0 && count5 === 0){
        gamex5.style.display= "block";
        gameo5.style.display= "none";
        value = 1;
        count5++;
        console.log(value , "value");
        console.log(count , "count5" );
        overallvalue[4]="x";
        console.log(overallvalue);
        console.log("5und div");
    }  
    else if
     (value == 1 && count5 === 0){
        gamex5.style.display= "none";
        gameo5.style.display= "block";
        value = 0;
        count5++;
        console.log(value , "value");
        console.log(count , "count5" );
        overallvalue[4]="o";
        console.log(overallvalue);
        console.log("5 div");
        
    }
    check ()
}
// 666
function clickedxoro6() {
    if (value == 0 && count6 === 0){
        gamex6.style.display= "block";
        gameo6.style.display= "none";
        value = 1;
        count6++;
        console.log(value , "value");
        console.log(count , "count4" );
        overallvalue[5]="x";
        console.log(overallvalue);
        console.log("4 div");
    }  
    else if
     (value == 1 && count6 === 0){
        gamex6.style.display= "none";
        gameo6.style.display= "block";
        value = 0;
        count6++;
        console.log(value , "value");
        console.log(count , "count4" );
        overallvalue[5]="o";
        console.log(overallvalue);
        console.log("6 div");
        
    }
    check ()
}
// 777
function clickedxoro7() {
    if (value == 0 && count7 === 0){
        gamex7.style.display= "block";
        gameo7.style.display= "none";
        value = 1;
        count7++;
        console.log(value , "value");
        console.log(count , "count7" );
        overallvalue[6]="x";
        console.log(overallvalue);
        console.log("7 div");
    }  
    else if
     (value == 1 && count7 === 0){
        gamex7.style.display= "none";
        gameo7.style.display= "block";
        value = 0;
        count7++;
        console.log(value , "value");
        console.log(count , "count4" );
        overallvalue[6]="o";
        console.log(overallvalue);
        console.log("7 div");
        
    }
    check ()
}
// 888
function clickedxoro8() {
    if (value == 0 && count8 === 0){
        gamex8.style.display= "block";
        gameo8.style.display= "none";
        value = 1;
        count8++;
        console.log(value , "value");
        console.log(count , "count8" );
        overallvalue[7]="x";
        console.log(overallvalue);
        console.log("8 div");
    }  
    else if
     (value == 1 && count8 === 0){
        gamex8.style.display= "none";
        gameo8.style.display= "block";
        value = 0;
        count8++;
        console.log(value , "value");
        console.log(count , "count4" );
        overallvalue[7]="o";
        console.log(overallvalue);
        console.log("8 div");
        
    }
    check ()
}
// 999
function clickedxoro9() {
    if (value == 0 && count9 === 0){
        gamex9.style.display= "block";
        gameo9.style.display= "none";
        value = 1;
        count9++;
        console.log(value , "value");
        console.log(count , "count9" );
        overallvalue[8]="x";
        console.log(overallvalue);
        console.log("9 div");
    }  
    else if
     (value == 1 && count9 === 0){
        gamex9.style.display= "none";
        gameo9.style.display= "block";
        value = 0;
        count9++;
        console.log(value , "value");
        console.log(count , "count9" );
        overallvalue[8]="o";
        console.log(overallvalue);
        console.log("9 div");
        }
        check ()
    }
function check () {
    if(overallvalue[0]=="x" && overallvalue[1]=="x" && overallvalue[2]=="x"){
        ontop.style.display="flex";
        line1.style.display="block"}
    

    if(overallvalue[0]=="x" && overallvalue[3]=="x" && overallvalue[6]=="x"){
        ontop.style.display="flex";
        line4.style.display="block"}
   
 
    if(overallvalue[0]=="x" && overallvalue[4]=="x" && overallvalue[8]=="x"){
        ontop.style.display="flex";
        line7.style.display="block"}

    if(overallvalue[1]=="x" && overallvalue[4]=="x" && overallvalue[7]=="x"){
        ontop.style.display="flex";
        line5.style.display="block"}
    
    if(overallvalue[2]=="x" && overallvalue[5]=="x" && overallvalue[8]=="x"){
        ontop.style.display="flex";
        line6.style.display="block"}
    
    if(overallvalue[3]=="x" && overallvalue[4]=="x" && overallvalue[5]=="x"){
        ontop.style.display="flex";
        line2.style.display="block"}
    
    if(overallvalue[6]=="x" && overallvalue[7]=="x" && overallvalue[8]=="x"){
        ontop.style.display="flex";
        line3.style.display="block"}
    
    if(overallvalue[6]=="x" && overallvalue[4]=="x" && overallvalue[2]=="x"){
        ontop.style.display="flex";
        line8.style.display="block"}
 
   
   
    if(overallvalue[0]=="o" && overallvalue[1]=="o" && overallvalue[2]=="o"){
        ontop.style.display="flex";
        line1.style.display="block"}

    if(overallvalue[0]=="o" && overallvalue[3]=="o" && overallvalue[6]=="o"){
        ontop.style.display="flex";
        line4.style.display="block"}

    if(overallvalue[0]=="o" && overallvalue[4]=="o" && overallvalue[8]=="o"){
        ontop.style.display="flex";
        line7.style.display="block"}

    if(overallvalue[1]=="o" && overallvalue[4]=="o" && overallvalue[7]=="o"){
        ontop.style.display="flex";
        line5.style.display="block"}

    if(overallvalue[2]=="o" && overallvalue[5]=="o" && overallvalue[8]=="o"){
        ontop.style.display="flex";
        line6.style.display="block"}

    if(overallvalue[3]=="o" && overallvalue[4]=="o" && overallvalue[5]=="o"){
        ontop.style.display="flex";
        line2.style.display="block"}

    if(overallvalue[6]=="o" && overallvalue[7]=="o" && overallvalue[8]=="o"){
        ontop.style.display="flex";
        line3.style.display="block"}

    if(overallvalue[6]=="o" && overallvalue[4]=="o" && overallvalue[2]=="o"){
        ontop.style.display="flex";
        line8.style.display="block"}

    
}
function buttonplayagain (){
    window.location.reload();
}