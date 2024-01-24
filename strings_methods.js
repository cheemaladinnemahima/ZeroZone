let message="Hello i am here"
let textMessage='Yes i am here Yes'
let newMessage=`hello world`

console.log(message);
let name="mahima";
let hellomassege=`hello this is ${name}`;
console.log(hellomassege);
let mahi="hello \n How are you"
console.log(mahi);
let para="Hello \r i am in \r college"
console.log(para);
console.log(message.length);
console.log(message.at(6));
console.log(message.charAt(8))
for(let i of message)
{
    console.log(i);
}
message=`h`+ message[1];
console.log(message);
console.log(message[0].toUpperCase());
let _temp=textMessage.indexOf("Yes",7);
console.log(_temp);
let temp=newMessage.startsWith("hello");
console.log(temp);
let massage1="hello text hello"
let temp1=massage1.slice(2,7);
console.log(temp1);
let temp2=massage1.substring(3,6);
console.log(temp2);
console.log('b'>'B');
let message2="    Mahima    "
console.log(message2.trim(''));
let message3='mahima'
console.log(message3.concat('cheemaladinne'));
console.log(message3.split(''));


