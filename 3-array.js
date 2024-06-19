

//object for same property


// let projectorBrand='viewsonic'
// let projectorPrice=2000
// let projectorColor='red'
// let projectorWidth="15cm"



let projector={
     brand:"viewsonic",
     color:'white',
     price:5000,
     height:15,
     width:40
    

}

console.log(projector);

let color={
    hex:'ff000',
    value:'red',
    rgbValue:'rgb(255,0,0,)'
}

console.log(color);

  


let red={
    hex:'ff00',
    value:'red',
    rgbvalue:'rgb(0,255,255)'

}
let green={
    hex:'ff660',
    value:'green',
    rgbvalue:'rgb(33,255,255)'

}
let blue={
    hex:'ff0033',
    value:'blue',
    rgbvalue:'rgb(0,255,255)'

}
let colors=[red,green,blue]
console.log(colors);


let courses=[
    {
        name:'mernnnnnnnnnn',//change mern to mern
        duration:'3months',
        cost:'20k'
    } ,

    {
        name:'py',
        duration:'2months',
        cost:'30k'
    },

    {
        name:'ml',
        duration:'3months',
        cost:'40k'
    },
];
    courses[0].name='mern'  
 



console.log('the courses are', courses);

let user={
    name:'ram',
    phone:'737...'
}
console.log(user.phone);