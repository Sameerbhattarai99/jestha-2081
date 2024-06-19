// datatyes
// primitive data type
    // String
    // Number
    // Boolean
    // undefined
    // null
 //non primitive   
    //array


    let fruits="apple,orange"//not right format for more data
  console.log(fruits);
  
  
  let fruits1='apple'
  
  let fruits2='banana'
  
  let fruits3='a'

  let fruits4='fdsfapple'

  //for many iterm use array
  //array has index start with zero
  //syntax array
  //let <arrayname>=['element1','element2','element3']


   let fruit=['apple', 'orange', 'grape']
   console.log(fruit);

  

//for change in array
 let colour=['red', 'blue' ,'geen']
 console.log('colour is',(colour));
 
//  colour='green'
//  console.log(colour);

 colour[2]='green'
 console.log(colour[2]);


 let evenNumbers=[2, 4, 6, 8 , 'twelve']
//remove twelve to 12
console.log('before',evenNumbers[4]);
 evenNumbers[4]=12
 console.log('after',evenNumbers[4]);
 console.log(evenNumbers); 
 
 
 let courses=['python','mern','mil','ul']
 console.log('course before error' , courses);
 courses[2]='ml'
 console.log('course mistake is',courses[2]);
 console.log('courses are ',courses);

 let users=['ram','sita','gita']
//  todo we need name and phone numbers
    // add shyam at last
let number=['1','2','3']


users.push('shyam')
console.log('user are',users);
users.splice(2,0,'oli')
console.log('users are',users);
