/* loop syntax
 -for
 -while
 -do while


 for(startingPoint> ;<condition>;<mutaorToChangeCpndition){
 //do somghing}

*/
for(let startFrom=0; startFrom<10;startFrom++){
    console.log('start from',startFrom);
}
console.log('end of loop');

let users=['ram','shyam','hari']

for(let start=0;start<users.length;start++){
    console.log('index ',start,users[start]);
}

// for(let i of users){
//     console.log(i);
// }
// let sum=0
// marks=[10,20,15,30]
//  for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i]
    
// }
// console.log(sum);

let db_users = [
    { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
    { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
    { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
 
]
function check(email,password){
    let match=0
    for(let i=0;i<db_users.length;i++){
    if(db_users[i].email===email && db_users[i].password===password){
        match++
        return(`${db_users[i].name} can login`)
    }
}
if(match==0){
    return('wrong detail');
}
}

console.log(check('aarav@gmail.com', 'aarav0')); 
console.log(check('aarya@gmail.com', 'aarya')); 

// console.log('you can login');
// check('aarav@gmail.com','aarav0')
//  check('aaravgmail.com','aarav0')

let persons=[
    { name:'ram' ,age:10, gender:'male'},
    { name:'sita' ,age:13, gender:'female'},
    { name:'hari' ,age:12, gender:'male'},
]
 for(i=0;i<persons.length;i++){
    let{name,age,gender}=persons[i]
    if(persons[i].gender==='male')
    console.log(`mr ${persons[i].name} has age ${persons[i].age} ` );
else{
    
   // console.log(`mrs ${persons[i].name} has age ${persons[i].age} ` );
    console.log(`mrs ${name} has age ${age} ` );//object destrcuting aaba persons.name ra persons.age lekhna pardaina
}
}

function findMultiplication(parameter){
    for(let i=parameter.startFrom;i<=parameter.endAt;i++){
    let mul=parameter.number*i
    console.log(parameter.number,'x',i,'=',mul);
    
}

}


findMultiplication({
    number:5,
    startFrom:1,
    endAt:5,
})





let countries = [
    {
        "code": "af",
        "name": "Afghanistan",
        "path": "afghanistan"
    },
    {
        "code": "al",
        "name": "Albania",
        "path": "albania"
    },
    {
        "code": "np",
        "name": "Nepal",
        "path": "nepal"
    }]

    function pass(shortform){
    
        for(i=0;i<countries.length;i++){
            if(countries[i].name===shortform){
                
                
                return(countries[i].code)
            }
        }
                return('not done')
             

        }

    
    console.log('the name is',pass('Albania'));

    