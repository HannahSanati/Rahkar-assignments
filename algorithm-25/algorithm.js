// 1 پنج عدد از ورودی دریافت کند و تعداد عدد های بزرگتر از صفر را در خروجی نشان دهد و برای عدد های کوچیکتر از
// صفر، مجموع اعداد انها را نمایش دهد
//تمرین 1:
// let countBiggerZero = 0
// let sumLessZero = 0

// for (let index = 0; index <= 5; index++) {
//     const numUser = prompt("Please enter number")
//     // console.log(numUser);
//     if(numUser>0){
//         countBiggerZero = countBiggerZero + 1
//     } else {
//         sumLessZero = numUser + sumLessZero
//     }
// }
// console.log(sumBiggerZero + ' sumBiggerZero')
// console.log(sumLessZero + ' sumLessZero')

// 2 اعداد زوج بین 100 تا هزار را نمایش دهد 
//تمرین 2:
// for (let index = 100; index <= 1000; index++) {
//     if (index%2==0) {
//        console.log(index);
//     }
// }

//3 برنامه ای بنویسید که عملیات توان دو و توان سه و رادیکال اعداد یک تا بیست را محاسبه کند
//تمرین 3:
// for (let index = 0; index <= 20; index++) {
//    console.log(Math.pow(index,2));
//    console.log(Math.pow(index,3));
//    console.log(Math.sqrt(index));
// }

//4 برنامه ای بنویسید که یک عدد از ورودی دریافت کند و اعداد فرد یک تا آن عدد را نمایش دهد 
//تمرین4:
// const num = prompt("enter your number:");
// // console.log(num);
// for (let oddNum = 0; oddNum < num; oddNum++) {
//   if (oddNum % 2 == !0) {
//     console.log(oddNum);
//   }
// }

//5 برنامه بنویسید که یک عدد از ورودی دریافت کند و فاکتوریل آن عدد را نمایش دهد 
//تمرین 5:
// let response =1
// const num = prompt("enter you number:");
// for (let index = 1; index <= num; index++) {
//     response = response * index

// }
// console.log(response);

//6 برنامه بنویسید که دو عدد از ورودی بگیرد و بزرگترین مقسوم علیه مشترک آن عدد را بنویسد
//تمرین 6:  (ATTENTIONNNN PLEASE, RETHINK)
// let a = 0;
// let maghsomA = [];
// let b = 0;
// let maghsomB = [];
// for (let index = 1; index <= a; index++) {
//   if (index % a == 0) {
//     console.log(index);
//     maghsomA.push(index);
//   }
// }

//7 دو عدد از ورودی دریافت کند و بگوید این دو عدد به همدگیر بخش پذیر هستند یا نه
//تمرین 7:
// const a = prompt("enter your first number:");
// const b = prompt("enter your second number:");
// // division =d
// let d = a % b;
// if (d == 0) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

//8 برنامه ای بنویسید که اعداد کوچتر از 300 که هم بر 3 و هم بر 7 بخش پذیر باشند را چاپ کند و همچنین تعداد این اعداد
////تمرین 8:
// let sum = 0;
// let count = 0;
// for (let index = 0; index < 300; index++) {
//   if (index % 3 == 0 && index % 7 == 0) {
//     console.log(index);
//     count = count + 1;
//     sum = index + sum;
//   }
// }
// console.log("counter:" + count);
// console.log("sum:" + sum);

//9 یک عدد از ورودی دریافت کند و تمام مقسوم علیه های آن عدد را چاپ کند
//تمرین 9:
// const num = prompt("enter your number:");
// for (let index = 0; index <= num; index++) {
//   if (num % index == 0) {
//     console.log(index);
//   }
// }

//0 برنامه بنویسید که اعداد سه رقمی را که شرط زیر را دارند چاپ کند
// در صورتی که هر کدام از رقم های اعداد سه رقمی را به توان سه برسانیم و آنها را باهم جمع کنیم دوباره به خود آن عدد
// می رسیم
//تمرین 10: 
// let result = []
//     for (let numAsli =100; numAsli<999; numAsli++) {
//         let num=numAsli
//         let arraynum=[]
//         let Tavan=0
//         for (let i=0; i<3; i++) {
//             arraynum[i]=num%10
//             console.log(arraynum);
//             num=Math.floor(num/10)
//             Tavan+=Math.pow(arraynum[i],3)
//         }
//         if(Tavan==numAsli) {
//             // console.log(Tavan)
//             result.push(Tavan)
//         }
//     }

//1 برنامه ای بنویسید که یک عدد از ورودی دریافت کند و تعداد رقم های آن عدد را نمایش دهد 
//تمرین 11:
// const num = prompt("enter your number:");
// console.log(num.length);

// 2 برنامه بنویسید که عدد های سه رقمی که رقم یکان آنها برابر با چهار باشد را نمایش دهد و همچنین مجموع این اعداد را
// هم به صورت جداگانه چاپ نماید
//تمرین 12:
// function threeDigitNumbers(lowestNumber,largestumber) {
//     var digit=0
//     var sum=0
//     for (let number = lowestNumber; number <= largestumber; number++) {
//         digit=(number%10)
//         if(digit==4){
//             console.log("number: "+number);
//             sum+=number
//         }
//     }
//     console.log("sum: "+sum);
// }
// threeDigitNumbers(100,999)


//3 یک عدد از ورودی گرفته و رقم های یکان و دهگان و صدگان آن عدد را نمایش دهید
//تمرین 13:
// const num = prompt("enter your number:");
// if (num % 1000) {
//   console.log(":صدگان" + (num % 1000));
// }
// if (num % 100) {
//   console.log(":دهگان" + (num % 100));
// }
// if (num % 10) {
//   console.log(":یکان" + (num % 10));
// }

//4 برنامه ای بنویسید که یک رقم از ورودی دریافت کنید و تعداد رقم های زوج در جایگاه زوج رقم ورودی را بنویسد و
// همچنین تعداد رقم های زوج در جایگاه فرد رقم ورودی را نیز چاپ کند
//تمرین 14:  weirddddd******
// let num = document.getElementById("inputQuestion14").value
//     let numToString = String(num)
//     let count = numToString.length
    
//     let resultEvenNumbers = 0
//     let resultOddNumbers = 0
//     console.log(num);
    
//     for (let c =0 ; c<count; c+=2) {
//         if (numToString[c]%2==0) {
//             // console.log("جایگاه زوج",numToString[c]);
//             resultEvenNumbers+=1
//         }
//     }
//     for (let c =1 ; c<=count; c+=2) {
//         if (numToString[c]%2==0) 
//             resultOddNumbers+=
//     }

//5 یک عدد سه رقمی از ورودی دریافت کنید و اعداد آن را به صورت معکوس نمایش دهید 
//تمرین 15:
// const num = prompt("enter your *** number:");
// let reverseNum= num.split("").reverse();
// console.log(reverseNum);

//6 اعداد چهار رقمی ای که با شرط معادله زیر برقرار باشند را چاپ کنید
//تمرین 16:
// let temp = [];
// for (let a = 0; a>= 1000 && a < 10000; a++) {
//  let numberString = number.toString();     
// if (parseInt(numberString[0])+parseInt(numberString[3])===
// parseInt(numberString[1])+parseInt(numberString[2])) {
//    console.log(number);
// } 
// }

//7 برنامه بنویسید که اعداد چهار رقمی که با شرط معدله زیر برقرار باشند را چاپ کند
// تمرین 17:  

//     let example=[]

//     for(let num=1000; num<10000; num++) {
//         let num2=num
//         let numToArray=[]
//         let a=0
//         let b=0
//         for(let count=0; count<4; count++) {
//             numToArray[count]=num2%10
//             num2=Math.floor(num2/10)
//         }
//         b=numToArray[3]*10+numToArray[2]
//         a=numToArray[1]*10+numToArray[0]
//         if((a+b)*(a+b)==num) {
//             // console.log(num);
//             example+=num + " " + "-"
//         }


//8 برنامه ای بنویسید که تمام اعداد اول سه رقمی )اعدادی که تنها دو مقسوم علیه دارند: 1 و خودشان( را چاپ کند 
// تمرین 18:
// function  a(num1,num2){
// let w=0
// for (let number =num1; number <=num2; number++) {
//     for (let i = 2; i < number; i++) {
//         if (number%i==0) {
//             w=i
//         }
//     }
//     if (w==0) {
//         console.log("number: "+number);
//     }
//     else{
//         w=0
//     }
// }
// }
// a(132,122)


//9 برنامه بنویسید که تمام اعداد سه رقمی که عدد یکان و صدگان آنها اعداد اول باشیند را چاپ کند
// تمرین 19:
// function isPrime(number) { 
//     if (number < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (let i = 100; i < 999; i++) {
//     let Hundreds = Math.floor(i/100);
//     let Ones = Math.floor(i%10);
//     if (isPrime(Hundreds) && isPrime(Ones)) {
//         console.log(i);
//     }
// }
   
//0 برنامه بنویسید که تمام اعداد 1 تا 999 را بررسی کند و اعدادی را که مجموع مقسوم علیههایشان دقیقاً دو برابر خود آن
// عدد است را چاپ کند
// تمرین 20:
// function w(num1,num2){
//     var sum
//     for (let number = num1; number < num2; number++) {
//         sum=0
//         for (let index = 1; index <= number; index++) {
//             if (number%index==0) {
//                 sum+=index
//             }
//             if (number==index && number==sum/2) {
//                 console.log("number: "+number);
//             }
//         }
        
//     }
// }
// w(199,342)

//1 برنامه ای بنویسید که اعداد 10 تا 1500 را بررسی کند و در صورتی که مجموع مقسوم علیه های یک عدد برابر عدد
// دیگری در این بازه باشد و بلعکس مجموع مقسوم علیه های آن عدد نیز برابر با عدد قبلی باشد 
//تمرین 21:


//2 برنامه بنویسید سه مقدار عددی از ورودی بگیرید )سال و ماه و روز( و تاریخ روز بعد را به صورت شمسی محاسبه کند
//تمرین 22:

//3 یک عدد بین 1 تا 365 از ورودی دریافت کند و تاریخ معدل امسال را به شمسی در خروجی نمایش دهد)فرض بر این
// است که سال 365 روز دارد(
//تمرین 23:

//4 برنامه ای بنویسید که یک رشته از ورودی بگیرد و معکوس آن را چاپ کند
//تمرین 24:

//5 برنامه ای بنویسید که تعدادی عدد از کاربر بگیرید و در صورت داشتن اعداد تکراری تعداد اعداد تکراری و خود اعداد را
// نمایش دهد
// تمرین 25: