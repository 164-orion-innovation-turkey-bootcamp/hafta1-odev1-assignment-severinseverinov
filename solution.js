//Bu fonsiyonda bruteforce uygulandı ve dizinin seçili elemanı ile dizide kalan diğer elemanlar karşılaştırıldı ve sonuçlar döndürüldü.
function IsEqual1(nums,target) {
    
    let newArr=[];
    let check=0;
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if((nums[i]+nums[j])==target){
                newArr.push(i);
                newArr.push(j);
                check=1;
                break;
            }
        }
        if(check==1){
            break;
        }
    }
    
    return newArr;
}
//Bir listede arama işlemleri sıralı dizilerde daha hızlı performans gösterdiğinden dolayı dizi ilk önce sıralı hale getirildi daha sonra soldan ve sağdan yaklaşmak koşulu ile arama işlemi yapıldı.
function IsEqual2(nums,target) {
    let newArr=[];
    let newNums=[...nums];
    let x,y;
    newNums=newNums.sort(function(a, b){return a - b});
    let start=0;
    let end=newNums.length-1;
    while(start<end){
        let sum=newNums[start]+newNums[end];
        if(sum>target){end-=1;}
        else if(sum<target){start+=1;}
        else{x=newNums[start];y=newNums[end];break;}
        
    }
    newArr.push(nums.indexOf(x));
    newArr.push(nums.lastIndexOf(y));
    return newArr;
}

let nums1=[2,11,7,15];let target1=9;
let nums2=[3,2,4];let target2=6;
let nums3=[3,3];let target3=6;

console.log('---------------------1. algoritma---------------------');
console.log('Array : '+nums1+' Target : '+target1);
start = Date.now();
console.log(IsEqual1(nums1,target1));
console.log('1. algoritma (Brute Force) : '+(Date.now() - start) + 'ms de tamamlandı');

console.log('Array : '+nums2+' Target : '+target2);
start = Date.now();
console.log(IsEqual1(nums2,target2));
console.log('1. algoritma (Brute Force) : '+(Date.now() - start) + 'ms de tamamlandı');

console.log('Array : '+nums3+' Target : '+target3);
start = Date.now();
console.log(IsEqual1(nums3,target3));
console.log('1. algoritma (Brute Force) : '+(Date.now() - start) + 'ms de tamamlandı');

console.log('---------------------2. algoritma---------------------');
console.log('Array : '+nums1+' Target : '+target1);
let startTime= Date.now();
console.log(IsEqual2(nums1,target1));
console.log('2. algoritma (Sıralı diziye sağdan soldan yaklaşma) : '+(Date.now() - startTime) + 'ms de tamamlandı');

console.log('Array : '+nums2+' Target : '+target2);
startTime= Date.now();
console.log(IsEqual2(nums2,target2));
console.log('2. algoritma (Sıralı diziye sağdan soldan yaklaşma) : '+(Date.now() - startTime) + 'ms de tamamlandı');

console.log('Array : '+nums3+' Target : '+target3);
startTime= Date.now();
console.log(IsEqual2(nums3,target3));
console.log('2. algoritma (Sıralı diziye sağdan soldan yaklaşma) : '+(Date.now() - startTime) + 'ms de tamamlandı');