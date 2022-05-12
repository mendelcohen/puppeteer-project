// let str = "11";
// str2 = str.slice("");
// console.log(typeof(str2));
// console.log(typeof(parseInt(str)));
// console.log(typeof(parseInt("")))


// var str = "Amount is 1000";
// var num = +str.replace(/[^0-9.]/g,"");
// console.log(typeof num);
let val = "999.99"
let isnum = /^\d+$/.test(val);
console.log(isnum);