let color={
    hex:'ff000',
    value:'red',
    // rgbValue:'rgb(255,0,0,)', esto banda objcet banaune
    rgbValue:{
        red:255,
        green:0,
        blue:0858585858,
    },
    name:"redddddddd"
}


 color.name="red"

console.log(color);

console.log(color.rgbValue.blue);


let users=[
    {
        name:"ram",

        address:
        {

            temporaryAddrress:
                {
                    address:"ktm",
                    ward:24,
                },  


            
            permanentAddress:
                {
                    address:'gor',
                    ward:24,
                 },
        },
    } ,   

     {   
        name:"hari",
        address:
        {

            temporaryAddrress:
                {
                    address:"brt",
                    ward:245,
                },  


            
            permanentAddress:
                {
                    address:'chit',
                    ward:4,
                 },
        },
    
     },

      {
         name:"gita",
        address:{

            temporaryAddrress:
            {
                address:"gor",
                ward:21,
            },

        
        permanentAddress:
            {
                address:'gopkr',
                ward:14,
             },
            },
        

    },
]
 users[2].address.permanentAddress.address='pokhara'
users[2].address.temporaryAddrress.num='1123'

console.log(users[0].name,'from',users[0].address.temporaryAddrress.address,'has ward no',users[0].address.temporaryAddrress.ward);
console.log(users[1].name,'from',users[1].address.temporaryAddrress.address,'has ward no',users[1].address.temporaryAddrress.ward);
console.log(users[2].name,'from',users[2].address.temporaryAddrress.address,'has ward no',users[2].address.temporaryAddrress.ward);

console.log("the address is",users);
//research :template literal/string literal

// console.log(`${users[0].name} from ${users[0].address.temporaryAddrress.address} has ward no ${users[0].address.temporaryAddrress.ward}`);
// console.log(`hari lives in ${users[1].address.temporaryAddrress.address}`);
// console.log(`gita lives in ${users[2].address.temporaryAddrress.address}`);



// function info(index){
//     console.log(`${users[index].name} from ${users[index].address.temporaryAddrress.address}has ward no ${users[index].address.temporaryAddrress.ward}`);
// }

//     info(0)
 
 
    function displayUserInfo(user){
        console.log(`${user.name} from ${user.address.temporaryAddrress.address}has ward no ${user.address.temporaryAddrress.ward}`);

 }

  displayUserInfo(users[0])
  