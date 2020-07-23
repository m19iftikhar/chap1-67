//Chap1
//task1
alert("welcome");
//task2
alert("Error! Please enter a valid password");
//task3
alert("Welcome to JS land... \nHappy coding");
//task4
alert("welcome to js land...");
confirm("happy coding!\nPrevent this page from creating additional dialogs.");
//task5
// write this in console
alert("Hello i can run JS from browser's console");
//Chap2
//task1
var username;
//task2
var fullname = "Muhammad Syed Iftikhar";
alert(fullname);
//task3
var message;
message= "hello world";
alert(message);
//task4
var name= "jhone Doe";
var age ="15";
var edu="certified mobile application developement";
alert(name);
alert(age + " years old");
alert(edu);
//task5
var a= "pizza";
alert(a+"\n"+a[0]+a[1]+a[2]+a[3]+"\n"+a[0]+a[1]+a[2]+"\n"+a[0]+a[1]+"\n"+a[0]);
//task6
var email = 'm19iftikhar@gmail.com'
alert("my email address is "+email);
//task7
var book = "a smarter way to learn to JavaScript"
alert("I am trying to learn from book "+book);
//task8
document.write("Yah! I can write HTML content through JS")
//task9
var pic="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(pic);
document.write("<br>"+pic+"<br>");
//Chap3
//task1
var age= 20;
alert("I am "+age+" years old"+"<br>");
//task2
var n=14;
alert("you habe visited this site "+n+"times");
//task3
var birthYear = 2000;
document.write("My birth year is "+birthYear + "<br>" +" data type of declared variable is number"+"<br>");
//task4
var visitorName=prompt("Enter your name","john");
var productTitle=prompt("product you are buying","tshirts");
var quantity=+prompt("how many","5");
document.write("<br>"+visitorName+" ordered "+quantity+" "+productTitle +" on xyzclothing.")
//Chap4
//task1
var a,b,c;
//task2
var a1;
var a2;
var a3;
var a4;
var a5;
// var 1a;
// var 2a;
// var 3a;
// var 4a;
// var 4a;
//Chap5
//task1
var num1= +prompt("enter first number");
var num2= +prompt("enter second number");
var num3= num1+num2;
document.write("the sum of "+num1+" and " +num2+ " is "+ num3 +"<br>");
//task2
var num4= num1-num2;
document.write("the substraction of "+num1+" and " +num2+ " is "+ num4 +"<br>");
var num5= num1*num2;
document.write("the multiplication of "+num1+" and " +num2+ " is "+ num5 +"<br>");
var num6= num1/num2;
document.write("the division of "+num1+" and " +num2+ " is "+ num6 +"<br>");
var num7= num1%num2;
document.write("the modulus of "+num1+" and " +num2+ " is "+ num7 +"<br>");
//task3
var bnum;
document.write("value after decleration is = "+bnum +"<br>");
bnum=5;
document.write("intial value = "+bnum +"<br>");
++bnum;
document.write("value after increment is = "+bnum +"<br>");
bnum=bnum+7;
document.write("value after addition is = "+bnum +"<br>");
bnum--;
document.write("value after decrement is = "+bnum +"<br>");
document.write("the remainder after dividing by 3 is = "+bnum%3 +"<br>")
//task4
var cost1 = 600;
document.write("The cost of 5 tickets to a movie is "+cost1*5+"PKR"+"<br>");
//task5
var m4 = 4;
document.write(m4+" * 1 = "+m4*1+"<br>");
document.write(m4 +" * 2 = "+m4*2+"<br>");
document.write(m4+" * 3 = "+m4*3+"<br>");
document.write(m4+" * 4 = "+m4*4+"<br>");
document.write(m4+" * 5 = "+m4*5+"<br>");
document.write(m4+" * 6 = "+m4*6+"<br>");
document.write(m4+" * 7 = "+m4*7+"<br>");
document.write(m4+" * 8 = "+m4*8+"<br>");
document.write(m4+" * 9 = "+m4*9+"<br>");
document.write(m4+" * 10 = "+m4*10+"<br>");
//task6
var cel = 25;
var fah = (cel*9/5)+32;
document.write(cel+"C is "+fah+"F"+"<br>");
fah = 70;
cel = (fah-32)*5/9;
document.write(fah+"F is "+cel+"C"+"<br>");
//task7
var p1 = 650;
var p2 = 100;
var qp1 = 3;
var qp2 = 7;
var shp = 100;
var qp3 = p1*qp1;
var qp4 = p2*qp2;
var tt = qp3+qp4+shp;
document.write("price of item 1 is "+p1+ "<br>");
document.write("quantity of item 1 is "+qp1+ "<br>");
document.write("price of item 2 is "+p2+ "<br>");
document.write("quantity of item 2 is "+qp2+ "<br>");
document.write("shipping charges are "+shp+ "<br>");
document.write("total cost of your order is "+tt+ "<br>");
//task8
var tm = 980;
var om = 805;
var per = 805*100/980
document.write("Total marks = "+tm+"<br>");
document.write("obtained marks = "+om+"<br>");
document.write("percentage = "+per+"%"+"<br>");
//task9
var usd = 10;
var ryls = 25;
var pkr = (10*104.8)+(25*28);
document.write("Total currency in PKR : "+pkr+"<br>");
//task10
var rn = 5;
var rn1 = ((rn+5)*10)/2;
document.write("Total = "+rn1+"<br>");
//task11
var cy = 2020;
var by = 1992;
var age = cy-by;
document.write("Birth year = "+by+"<br>");
document.write("Current year = "+cy+"<br>");
document.write("Your age = "+age+"<br>");
//task12
var rd = 20;
var cfn = 2*3.142*20;
var area = 3.14*(20*20);
document.write("radius = "+rd+"<br>");
document.write("circumference = "+cfn+"<br>");
document.write("area = "+area+"<br>");
//task13
var favsnks = "Slanty"
var crage = 20;
var maxage = 95;
var esampd = 6;
var total = (maxage-crage)*esampd;
document.write("favourite snacks = "+favsnks+"<br>");
document.write("current age = "+crage+"<br>");
document.write("maximum age = "+maxage+"<br>");
document.write("estimated snacks per day = "+esampd+"<br>");
document.write("total snacks needed = "+total+"<br>");
//Chap6-9
//task1
var anum = 10;
document.write("Result:");
document.write("The value of a is "+anum+"<br>");
document.write("the value of ++a is "+(++anum)+"<br>");
document.write("the value of a now is "+anum+"<br>");
document.write("the value of a++ is "+(anum++)+"<br>");
document.write("the value of a now is "+anum+"<br>");
document.write("the value of --a is "+(--anum)+"<br>");
document.write("the value of a now is "+anum+"<br>");
document.write("the value of a-- is "+(anum--)+"<br>");
document.write("the value of a now is "+anum+"<br>");
//task2
var a = 2;
var b = 1;
var result = (--a)-(--b)+(++b)+(b--);
// --a
// now a = 1
// --b 
// now b= 0
// b++
// now b = 1
// b--
// now b is still 1 it will become 0 in next statement
document.write("Result = "+result+"<br>");
//task3
var nm1 = prompt("enter your name");
alert("welcome "+nm1);
//task5
var tb1= +prompt("enter a number","10");
if(tb1===0){
    document.write("5 * 1 = "+5*1 +"<br>");
    document.write("5 * 2 = "+5*2 +"<br>");
    document.write("5 * 3 = "+5*3 +"<br>");
    document.write("5 * 4 = "+5*4 +"<br>");
    document.write("5 * 5 = "+5*5 +"<br>");
    document.write("5 * 6 = "+5*6 +"<br>");
    document.write("5 * 7 = "+5*7 +"<br>");
    document.write("5 * 8 = "+5*8 +"<br>");
    document.write("5 * 9 = "+5*9 +"<br>");
    document.write("5 * 10 = "+5*10 +"<br>");
}
else{
    document.write(tb1+" * 1 = "+tb1*1 +"<br>");
    document.write(tb1+" * 2 = "+tb1*2 +"<br>");
    document.write(tb1+" * 3 = "+tb1*3 +"<br>");
    document.write(tb1+" * 4 = "+tb1*4 +"<br>");
    document.write(tb1+" * 5 = "+tb1*5 +"<br>");
    document.write(tb1+" * 6 = "+tb1*6 +"<br>");
    document.write(tb1+" * 7 = "+tb1*7 +"<br>");
    document.write(tb1+" * 8 = "+tb1*8 +"<br>");
    document.write(tb1+" * 9 = "+tb1*9 +"<br>");
    document.write(tb1+" * 10 = "+tb1*10 +"<br>");
}
//task6
var sub1 = prompt("enter name of 1st subject","english");
var sub2 = prompt("enter name of 2nd subject","math");
var sub3 = prompt("enter name of 3rd subject","physics");
var tot = 100;
var obm1 = +prompt("enter obtained marks in english","67");
var obm2 = +prompt("enter obtained marks in math","66");
var obm3 = +prompt("enter obtained marks in physics","65");
var obm4 = obm1+obm2+obm3;
document.write(sub1+"   "+tot+"   "+obm1+"   "+obm1*100/tot+"% <br>");
document.write(sub2+"   "+tot+"   "+obm2+"   "+obm2*100/tot+"% <br>");
document.write(sub3+"   "+tot+"   "+obm3+"   "+obm3*100/tot+"% <br>");
document.write("total marks = 300 "+ " " + " total obtained marks = "+(obm1+obm2+obm3)+"  "+" percentage = "+obm4*100/300 );
//---------------------------------------------------------------------------------------
//Chap 9-11
//task1
var city = prompt("enter a city name","karachi");
if(city==="karachi"){
    alert("welcome to city of lights");
}
else{
    alert("welcome");
}
//task2
var gender = prompt("please enter your gender");
if(gender==="male"){
    alert("Good Morning Sir");
}
else if(gender==="female"){
    alert("good morning maam");
}
else{

}
//task3
var signal = prompt("color of traffic signal?")
if(signal==="red")
{
    alert("Must stop");
}
else if(signal==="yellow")
{
    alert("ready to move");
}
if(signal==="green")
{
    alert("move now");
}
else{}
//task4
var fuel = +prompt("how mush petrol left");
if(fuel<0.25){
    alert("please refill fuel");
}
else{
    alert("go on");
}
//task6
var ma1 = +prompt("enter obtained marks in 1st subject","67");
var ma2 = +prompt("enter obtained marks in 2nd subject","66");
var ma3 = +prompt("enter obtained marks in 3rd subject","65");
var ma4 = ma1+ma2+ma3;
var ma5 = 300;
var ma6 = ma4*100/ma5;
if(ma6>=80){
    document.write("<br>total marks = "+ma5+"<br>"+"marks obtained = "+ma4+"<br>"+"percentage = "+ma6+"%"+"<br>"+"grade = A-one <br> remarks = Excellent");
}
else if(ma6>=70){
    document.write("<br>total marks = "+ma5+"<br>"+"marks obtained = "+ma4+"<br>"+"percentage = "+ma6+"%"+"<br>"+"grade = A <br> remarks = Good");
}
else if(ma6>=60){
    document.write("<br>total marks = "+ma5+"<br>"+"marks obtained = "+ma4+"<br>"+"percentage = "+ma6+"%"+"<br>"+"grade = B <br> remarks = need to improve");
}
else if(ma6<60){
    document.write("<br>total marks = "+ma5+"<br>"+"marks obtained = "+ma4+"<br>"+"percentage = "+ma6+"%"+"<br>"+"grade = fail <br> remarks = sorry");
}
else{}
//task7
var scnum = 6;
var scnum2 = scnum+1
var scnum1 = +prompt("guess a num from 1 to 10");
if(scnum1===scnum){
    alert("bingo!correct answer.");
}
else if(scnum1===scnum+1){
    alert("close enough ");
}
else{
    alert("you lost")

};
//task8
var innum = +prompt("enter your number");
var innum1 = innum % 3; 
if(innum1 === 0){
    alert("num is divisible by 3");
}
else{
    alert("num is not div by 3");
}
//task9
var innum = +prompt("enter your number");
var innum1 = innum % 2; 
if(innum1 === 0){
    alert("num is even");
}
else{
    alert("num is odd");
}
//task10
var tem = +prompt("todays temperature?");
if(tem>40){
    document.write("<br> it is too hot outside.<br>");
}
else if(tem>30){
    document.write("<br>the weather today is normal<br>");
}
else if(tem>20){
    document.write("<br>todays weather is cool<br>");
}
else if(tem>10){
    document.write("<br>omg todays weather is so cool<br>");
}
else{
    document.write("<br>its freezing<br>");
}
//task11
var clc = +prompt("first number");
var clc1 = +prompt("second number");
var clc2 = prompt("operation from +,-,*,/,% (answer is in webpage)");
if(clc2==="+"){
    document.write(clc+clc1);
}
else if(clc2==="-"){
    document.write(clc-clc1);
}
else if(clc2==="*"){
    document.write(clc*clc1);
}
else if(clc2==="/"){
    document.write(clc/clc1);
}
else if(clc2==="%"){
    document.write(clc%clc1);
}
else{};
//------------------------------------------------------------------------------
//Chap12-13
//task1
var chr = prompt("enter any character or digit");
if(chr > 64 && chr < 91){
    document.write("its an upper case character");
}
if(chr > 96 && chr < 123){
    document.write("its an upper case character");
}
if(chr > 47 && chr < 58){
    document.write("its an upper case character");
}
else{}
//task2
var inti1= +prompt("enter 1 number");
var inti2= +prompt("enter 2 number");
if(inti1>inti2){
    alert(inti1);
}
else if(inti1<inti2){
    alert(inti2);
}
else{
    alert("both are equal");
}
//task3
var numb1= +prompt("enter your number");
if(numb1>0){
    alert("positive");
}
else if(numb1<0){
    alert("negative");
}
if(numb1=0){
    alert("the number is 0");
}
//task4
var chh = prompt("enter a character");
if(chh=="a"||chh=="e"||chh=="i"||chh=="o"||chh=="u"){
    alert("true");
}
else{
    alert("false");
}
//task5
var pss = "password";
var pss1 = prompt("enter your password");
if(pss===pss1){
    alert("correct the password you enter matches the original password");
}
else{
    alert("incorrect password");
}
//task6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
//task7
var tme = +prompt("enter the hour in 24hr clock format");
if(tme>12){
    document.write("the time is "+(tme-12)+"pm <br>");
}
else if(tme===12){
    document.write("the time is "+12+"pm <br>")
}
else if(tme<12){
    document.write("the time is "+tme+"am <br>");
}
else{}
if(tme<=12){
    document.write("Good morning");
}
else if(tme<=17){
    document.write("Good afternoon");
}
else if(tme<=21){
    document.write("Good evening");
}
else if(tme<=24){
    document.write("Good night");
}
else{}
//---------------------------------------------------------------------
//chap14-16
//task1
var jsarray = [];
//task2
var jsarray2 = {};
//task3
var jsarray3 = ["abc","def","ghi","jkl"];
//task4
var jsarray4 = [1,2,3,4,5];
//task5
var jsarray5 = [true,false];
//task6
var jsarray6 = [1,"a",2,"b",3,"c"];
//task7
var jsarray7 = ["SSC","HSC","BCS","BS","BCOM","MS","MPHIL","PHD"];
document.write("1 "+jsarray7[0]+"<br>");
document.write("2 "+jsarray7[1]+"<br>");
document.write("3 "+jsarray7[2]+"<br>");
document.write("4 "+jsarray7[3]+"<br>");
document.write("5 "+jsarray7[4]+"<br>");
document.write("6 "+jsarray7[5]+"<br>");
document.write("7 "+jsarray7[6]+"<br>");
document.write("8 "+jsarray7[7]+"<br>");
//task8
var jsarrayn8 = ["john","arthur","thomas"];
var jsarray8 = [320,230,480];
var tt = 500;
document.write("score of "+jsarrayn8[0]+" is "+jsarray8[0]+". percentage is "+jsarray8[0]*100/tt+"<br>");
document.write("score of "+jsarrayn8[1]+" is "+jsarray8[1]+". percentage is "+jsarray8[1]*100/tt+"<br>");
document.write("score of "+jsarrayn8[2]+" is "+jsarray8[2]+". percentage is "+jsarray8[2]*100/tt+"<br>");
//task9
var array9 = [320,230,480,120];
array9.sort();
document.write(array9+"<br>");
//task10
var array10 = ["karachi","lahore","islamabad","quetta","peshawar"];
var sarray10 = array10.slice(2,4);
document.write(sarray10+"<br>");
//task12
var array12 = ["this ","is ","my ","cat "];
array12.join();
document.write(array12);
//task13
var array13 = [];
array13.push("keyboard");
array13.push("mouse");
array13.push("printer");
array13.push("monitor");
document.write("<br>"+array13);
array13.shift();
document.write("<br>"+array13);
array13.shift();
document.write("<br>"+array13);
array13.shift();
document.write("<br>"+array13);
array13.shift();
document.write("<br>"+array13);
//task14
array13.push("keyboard");
array13.push("mouse");
array13.push("printer");
array13.push("monitor");
document.write("<br>"+array13);
array13.pop();
document.write("<br>"+array13);
array13.pop();
document.write("<br>"+array13);
array13.pop();
document.write("<br>"+array13);
array13.pop();
document.write("<br>"+array13);
//-------------------------------------------------------
//chap17-20
//task3
for(var ts313 = 1; ts313<=10; ts313++ ){
    document.write("<br>"+ts313);
}
//task4
var t = +prompt("enter a number");
var tt = +prompt("enter length of the table");
for(var ttt=0; ttt<=tt; ttt++){
    document.write("<br>"+t+" * "+ttt+" = "+ t*ttt);
}
//task5
var frts = ["apple","banana","mango","orange","strawberry"];
for(var i = 0; i<frts.length;i++){
    document.write("<br>"+frts[i]);
}
for(var j = 0; j<frts.length;j++){
    document.write("<br>element at index "+j+" is "+frts[j]+"<br>");
}
//task6
for(cht6= 0; cht6<=15;cht6++){
    document.write(cht6+",");
}
document.write("<br>");
for(cht61= 10; cht61>=0;cht61--){
    document.write(cht61+",");
}
document.write("<br>");
for(cht62= 0; cht62<=20;cht62++){
    if(cht62%2===0){
    document.write(cht62+",");
    }
}
document.write("<br>");
for(cht62= 0; cht62<=20;cht62++){
    if(cht62%2!=0){
    document.write(cht62+",");
    }
}
document.write("<br>");
for(cht62= 1; cht62<=20;cht62++){
    if(cht62%2===0){
    document.write(cht62+"K,");
    }
}
//task7
var flg=0;
var items = ["cake","apple pie","cookie","chips","patties"];
var inp7 = prompt("enter the item you want");
for(var tsk7=0; tsk7<=items.length-1;tsk7++){
    if(items[tsk7]===inp7){
        document.write("<br>"+inp7+" is available at index "+tsk7+" in our bakery");
        break;
    }
    else{
flg=flg+1;     }
}
if(flg>4){
document.write("<br >we are sorry. this item is unavailable in our bakery");
}
var items = ["cake","apple pie","cookie","chips","patties"];
var inp7 = prompt("enter the item you want");
for(var tsk7=0; tsk7<=items.length;tsk7++){
    if(items[tsk7]===inp7){
        document.write("<br>"+inp7+" is available at index "+tsk7+" in our bakery");
        break;
    }
    else if(tsk7===5){
        document.write("<br>"+" sorry is not available at in in our bakery");

    }
    
}
//task8
var itsk8 = [24,53,78,91,12];
document.write("<br>"+itsk8);
document.write("<br>"+Math.max(...itsk8));
//task9
var itsk9 = [24,53,78,91,12];
document.write("<br>"+itsk9);
document.write("<br>"+Math.min(...itsk8)+"<br>");
//task10
for(var tsk10 = 0; tsk10<=100;tsk10++){
    if(tsk10%5===0){
        document.write(tsk10+" ");
    }
}
//----------------------------------------------------------
//chap21-25
//task1
var f1name = prompt("enter your first name");
var f2name = prompt("enter your last name");
var f3name = f1name+" "+f2name;
alert("welcome to our website "+f3name);
//task2
var favmbl = prompt("please enter your fav mobile name");
var lnmbl = favmbl.length;
document.write("<br>your fav mobile is "+favmbl);
document.write("<br>length of name is "+lnmbl);
//task3
var chtsk3="Pakistani";
document.write("<br>String:"+chtsk3+"\n"+"<br>Index of n:"+chtsk3.indexOf("n"));
//task4
var chtsk4="hwllo world"
document.write("<br>the last index of l in hello world is "+chtsk4.lastIndexOf("l"));
//task5
var chtsk5 = "pakistani";
document.write("<br>at the index 3 of pakistani is "+chtsk5.charAt(3));
//task6
var chtsk6=prompt("Enter your first name ");
var chtsk61=prompt("Enter your last name");
var chtsk62=chtsk6.concat(chtsk61);
alert(chtsk62);
//task7
var chtsk7="Hyderabad";
var chtsk71=chtsk7.replace("Hyder","Islam");
alert(chtsk71);
//task8
var chtsk8 = "Ali and Sami are best friends. They play cricket and football together.";
document.write(chtsk8.replace(/and/g,"&"));
//task9
var chtsk9=472;
var chtsk91=chtsk9.toString();
alert(chtsk9+":"+typeof(chtsk9)+ "\n" +chtsk9+":" +typeof(chtsk91));
//task10
var chtsk10="penauts";
alert(chtsk10.toUpperCase());
//task11
var chtsk11=prompt("Enter anything");
var chtsk111=chtsk11.slice(0,1);
var chtsk112=chtsk11.slice(1);
var chtsk113=chtsk111.toUpperCase();
var chtsk114=chtsk112.toLowerCase();
alert(chtsk113+chtsk114);
//task13
var chtsk13=prompt("Enter you name");
var chtsk131=chtsk13.indexOf("@");
var chtsk131=chtsk13.indexOf(".");
var chtsk131=chtsk13.indexOf(",");
var chtsk131=chtsk13.indexOf("!");
alert("please enter a valid name");
//task14
var chtsk14=prompt("Welcome to ABC bakery.What do you want to order");
chtsk14=chtsk14.toLowerCase();
var chtsk141= ["cake", "apple pie", "cookie", "chips", "patties"];
for(chtsk142=0;chtsk142<chtsk141.length;chtsk142++){
if(chtsk141[chtsk142]===chtsk14){
    var ax=chtsk141.indexOf(chtsk14);
    document.write(chtsk141[chtsk142]+" yes its avaliable at index "+ax+" in our bakery");
    break;
}


    else{
        document.write("We are sorry "+chtsk14+" is not available in our bakery ");
        break;
    }
}
//chap 26-30
//task1
var chtsk26=+prompt("Enter a number");
alert(chtsk26);
var a=Math.round(chtsk26);
alert(a);
var a=Math.floor(chtsk26);
alert(a);
var a=Math.ceil(chtsk26);
alert(a);

//task2
var chtsk261=+prompt("Enter a number");
alert(chtsk261);
var a=Math.round(chtsk261);
alert(a);
var a=Math.floor(chtsk261);
alert(a);
var a=Math.ceil(chtsk261);
alert(a);

//task3
var lw=-4;
alert("The absolute value of " +lw+" is "+Math.abs(lw));

//task4
var u=Math.random()*6+1;
var pq=Math.floor(u);
alert("Random value of dice is "+pq);

//task5
var o=Math.random()*2+1;
var qo=Math.floor(o);
if (qo===1){
    alert("Tails");
}
else if(qo===2){
    alert("Heads");
}

//task6
var hund=Math.random()*100+1;
var ans=Math.floor(hund);
alert("Random number between 1 and 100 :"+ans);

//task8
var secret=Math.random()*10+1;
var sq=Math.floor(secret);
var ans2=parseInt(prompt("Enter your number"));
if (ans2===sq){
    alert("Bingo! right answer");
}
else {
    alert("Try again");
}

//chap 31-34
//task1
var dt=new Date();
alert(dt);

//task2
var mon=['january','Feb','March','April','May','June','July'];
var tdx=new Date();
var xt=tdx.getMonth();
alert(mon[xt]);

//task3
var x=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
        var t=new Date();
        var p=t.getDay();
        var t=x[p];
        var xa=t.slice(0,3);
        document.write("Today is "+xa);

//task4
         var fun=new Date();
        var dy=fun.getDay();
        var apl=x[dy];
        if (apl==="saturday"){
            alert("fun day");
        }
        else if(apl==="sunday"){
            alert("fun day");
        }
        else{
            alert("No fun day :D");
        }
//task5
    var funn =new Date();
    var uu=funn.getDate();
    if (uu<=15){
        alert("First fifteen days of month");
    }
    else{
        alert("Last days of the month");
    }

//task7
var tp=new Date();
var x=tp.getHours();
if (x>=24 || x<=12){
    alert("AM");
}
else{
    alert("PM");
}

//task8
var zz=new Date("May 31,2020");
alert(zz);

//task9
var rmdd=new Date("June 18,2015");


        var a=new Date("June 18 ,2015");
        var x=a.getTime();
        var b=new Date();
        var z=b.getTime();
        var d=z-x;
        var ag=d/(1000*60*60*24);

        var wq=Math.floor(ag);
       alert( wq+" days have passed since 1st Ramadan");


//task11  
       var he=new Date("December 05,2015");
         var hel=he.getTime();
         var xq=new Date();
         var ee=xq.getTime();
         var ty=ee+hel;
 
         alert(ty);

//task14
var unitss=410;
var charg=16;
document.write("K-ELECTRIC BILL"+"<br>");
document.write("Custome Name:ABC Customer"+"<br>");
document.write("Number of units :"+unitss+"<br>");
document.write("Charges per unit"+charg+"<br>")
var n=unitss*charg;
document.write("Payable within due date "+n.toFixed(2)+"<br>");
var n=n+350;
document.write("Payable within due date "+n.toFixed(2)+"<br>");
//Chap 35-38
//task1
function telldate(){
    var qp=new Date();
    alert(qp);

}
telldate();

//task2
function namew(firstn,lastn){

    alert(firstn+lastn);
}
namew("Muhammad ","Iftikhar");

//task3
function add(a,b){

    return a+b;
}
var xx=add(2,3);
alert(xx);

//task4
function cal(s,oper,l){

    if (oper==="+"){
        alert(s+l);
    }
    else if(oper==="-"){
        alert(s-l);
    }
    else if(oper==="*"){
        alert(s*l);
    }
    else if(oper==="/"){
        alert(s/l);
    }
    else{
        alert("Wrong operator");
    }
}
cal(4,"*",5);

//task5
function square(num){
    return num*num;

}
var a=square(5);
alert(a);

//task6
function factorial (n){

    j = 1;
    for(i=1;i<=n;i++){
      j = j*i;
    }
    return j;
  }
  var xr=parseInt(prompt("Enter a number"));
  var xrr=factorial (xr);
  alert(xrr);

//task7
function counting(){

    for(a=uu;a<=uxi;a++){
        document.write(a+"<br>");
    }}
  var uu=parseInt(prompt("Enter a number"));
  var uxi=parseInt(prompt("Enter a number"));
counting();

//task8
function calcHypotenus(base,  per) {
   
    
        return (base + per) ;}
        function sqrrt(){
        return (base*base+per*per);

    
}

var per=parseInt(prompt("Enter a number"));
var base=parseInt(prompt("Enter a number"));

var ty=calcHypotenus(base,per);
var yu=sqrrt(base,per);
alert(ty);
alert(yu);

//task9
function area(w,h){
    return w*h;
}
var xv=area(3,4);
alert(xv);

//task11
function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("the quick brown fox"));
//chap 38-42
//task1
function power(a,b){

var ans=Math.pow(a,b);
console.log(ans)

}
power(2,5)

//task2
function leapyear(year){

    if(year%100===0 ? year%400===0 : year%4===0){

        console.log("It's a leap year ");

    }
    else{
        console.log("Not a leap year");
    }
}

var ans1=parseInt(prompt("Year"))
leapyear(ans1)

//task 6
function vowel(){
var string = "My name is Syed Adeel Hussain Rizvi";

string = string.replace( /[aeiou]/g, '' );

console.log(string)}
vowel();
//task 7

function findOccurrences() {
    var str = "My name is adeel rizvii";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  console.log(findOccurrences());

//Chap 43-48

//task3
function Row1(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }
//task4

function mover(){
    var t=document.getElementById('imga').src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhATExIWEhUWFxcVFRgWGBcYGBcSFRUWFhYXHRUaHSggGBolGxcXITMhJikrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QGC0dHR0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLSstLS0tKys4KzAtLS0tMS03NzMtKzctLS0rK//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCCAH/xABFEAACAgEBBAYHAwkHAwUAAAABAgADEQQFEiExBgcTQVFxIjJhgZGhsUJywRQjM0NSYoLC8ERTg5LR0+GistIWVGWTlP/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAeEQEBAQADAQADAQAAAAAAAAAAEQECEiExQVFhA//aAAwDAQACEQMRAD8A7jERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBE/HYAEk4A5k8gJCarpbok4HVU/8A2J+J4+6BORKrZ1hbPH9prPkWP0E0dR1k6L7OpUf4dh+e7+Es1KvETnNvT7TNy2g6fdrH81BmFullLctsXr/BQPrpI6ldMiVDYddlqCxddqL0PFWfs0UjxG5ShI9vGeNd030en9FtWrkcCKw1vHwLDeAPmRL1KuUTm1vWxpR6q6h/JKvxaa5636AcdjqPhV/5SQrqMTm9HW3pT6yXL95F/leS2i6ytA/Dt1X7wdPmy4+cQq5RI/RbZptG8lisPFSGHxUmb6sCMg5Hskiv2IiAiIgIiICIiAiIgIiICIiAiIgInl3ABJIAHMngAPOc86WdadNO9XpQL7ORc/olPsxxf3YHtgX7WayupC9rrWg5sxAA95nOukfW1UmU0idqf7x8hPcnrN792cr21t7Uat9+61rD3Z4Kv3VHBfdI8KO/jLETO2ulWr1RPa3Mw/Z5IPJBw9/ORBBPMz0oJmeukDnKjU7I9w4e2ZEo8Zs2nunrQ6Z7LEStS7scKqjJJ9g/rED8FQGAFySQ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"
}

function mout(){

    var aq=document.getElementById('imga').src="https://www.carsenthusiastspakistan.com/wp-content/uploads/2019/08/2020-honda-civic-hatchback-1-1.jpg";

}

//task5
var yp=0;
function inc(){


yp++;
 document.getElementById('ans').innerHTML=yp;
   
}

function dec(){


    yp--;
     document.getElementById('ans').innerHTML=yp;
       
    }

//chap 49-52
//task1
function checkAddress(fieldId,fieldId2){
    var xyz=document.getElementById(fieldId).value;

    var tfd=document.getElementById(fieldId2).value;
    document.write("Email"+"<br>"+xyz+"<br>");
    document.write("Password"+"<br>"+tfd)
}
//task2
function red(){


    var textr="  is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "

var pr=document.getElementById('dd');
pr.innerHTML=textr;

}

//chap 58-67

var a1=document.getElementById('main-content');

console.log(a1.childNodes);
for (var i = 0; i < a1.childNodes.length; i++) {
    console.log(a1.childNodes[i].innerHTML)
}
var ans32=document.getElementById('first-name').value="Muhammad";

var ans312=document.getElementById('last-name').value="iftikhar";

var ans322=document.getElementById('email').value="m19iftikhar@gmail.com";
console.log(ans32)
console.log(ans312)
console.log(ans322)

    var a2=document.getElementById('form-content');
    var ans21=a2.nodeType;
    console.log(ans21)

    var a3=document.getElementById('lastName');
     var k=a3.nodeType;
     var kk=a3.childNodes;
    console.log(k);
    console.log(kk.nodeType);



    var tp=a1.parentNode.firstChild;
    var td=a1.parentNode.lastChild;
    console.log(tp)
    console.log(td);

var tf=a3.nextSibling;
var tdf=a3.previousSibling;
console.log(tf);
console.log(tdf);

var jj=document.getElementById('email');
console.log(jj.parentNode)
console.log(jj.nodeType)