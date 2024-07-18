/*
eString() = returns a string with a language
            sensitive representation of this number
.toLocaleString(locale,{options});

e` = specify the laguage (undefined= default set in browser)
ns` = object with formatting options
*/

let Num = 100;

//Num = Num.toLocaleString("en-US");        // 123456.789;
// separates comma for every thousands place
//Num = Num.toLocaleString("hi-IN");
// indian number system. 
//Num =  Num.toLocaleString("en-US",{style:"currency",currency:"USD"});
// added dollar sign
//Num =  Num.toLocaleString("hi-IN",{style:"currency",currency:"INR"});
// added rupee sign
//Num=Num.toLocaleString(undefined,{style:"percent"});
// addded percentage symbol
//Num=Num.toLocaleString(undefined,{style:"unit",unit:"celsius"});
// added celsius symbol 
console.log(Num);