var i;
for(i=1;i<=20;i++){
    console.log(i);
}
for(i=1;i<=20;i++){
    if(i%2!=0){
        console.log(i);
    }
}
var array=[25,11,14,19,11,67,99];
var sum=0;
for(i=0;i<array.length;i++){
    sum+=array[i];
}
console.log(sum);
var max = array[0];
for(i=1;i<array.length;i++){
    if(max<array[i]){
        max=array[i];
    }
}
console.log(max);
var k=0;
for(i=0;i<array.length;i++){
    if (array[i]==11){
        k++;
    }
}
console.log(k);