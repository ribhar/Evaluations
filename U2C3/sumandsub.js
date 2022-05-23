var arr= [1,2,3,4];
var N= 4;
var K = 3;

var count = 0;
var sum=0;
var Length= 0;
for(var i=0; i<N; i++){
    sum += arr[i];
}

if(sum%K!=0){
    count++
}
else{
    var l=0;
    var r=N-1;

    while(l<r){
        if(arr[l]%K!=0){
            sum -= arr[l];
            l++;
            Length = r-l+1;
            break;
        }
        else if(arr[r]%K!=0){
            sum -= arr[r];
            r--;
            Length = r-l+1;
            break;
        }
        else{
            l++;
            r--;
            Length = r-l+1;
            break;
        }
    }

    newsum =0;
    for(var i=0; i<Length; i++){
        newsum += arr[i];
    }
    if(newsum%K!=0){
        count++;
    }
    
    temp = newsum;
    for(var j=Length; j<N; j++){
        temp += arr[j];
        temp -= arr[j-Length]

        if(temp%K!=0){
            count++;
        }
    }

}

console.log(count);

