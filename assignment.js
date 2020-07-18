
//  feetToMile

 function feetToMile(feet){
    var mile=feet/5280;
     return mile;
 }

 var mile1=feetToMile(60);
 console.log(mile1);
 var mile2=feetToMile(500);
 console.log(mile2);
 var mile3=feetToMile(360);
 console.log(mile3);



//  woodCalculator

function  woodCalculator(chair,table,bed)
{

    var woodForChairs=1*chair;
    var woodForTables=3*table;
    var woodForBeds=5*bed;

    var totalWood=woodForChairs+woodForTables+woodForBeds;
    return totalWood;
}

var result1=woodCalculator(1,1,1);
console.log(result1);
var result2=woodCalculator(2,3,4);
console.log(result2);
var result3=woodCalculator(4,5,8);
console.log(result3);


// brickCalculator

function brickCalculator(number)
{
if(number<=10)
{
    var height1=number*15;
    var totalBrick1=height1*1000;
    return totalBrick1;
}
else if(number>10 && number<=20)
{
    var height2=15*10;
    var totalBrick2=height2*1000;
    var height3=(number-10)*12;
    var totalBrick3=height3*1000;
    var totalBrick4=totalBrick2+totalBrick3;
    return totalBrick4;
}
else if(number>20)
{
    var height4=15*10;
    var totalBrick5=height4*1000;
    var height5=12*10;
    var totalBrick6=height5*1000;
    var height6=(number-20)*10;
    var totalBrick7=height6*1000;
    var totalBrick8=totalBrick5+totalBrick6+totalBrick7;
    return totalBrick8;
}

}

var total1=brickCalculator(7);
console.log(total1);
var total2=brickCalculator(17);
console.log(total2);
var total3=brickCalculator(27);
console.log(total3);


// tinyFriend




