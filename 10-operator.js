/*  operator
and &&
or ||


*/

let user={

    name:'ram',
    hasAttendance:false,
    paidStatus:false,
    hasScholarship:true,
    email:'sita@.com',
    password:'password'
}
function login(email,password){
    if(user.email=='sita@.com' &&   user.password=='password')
        console.log('you can login');
    else
    console.log('you cannot login');

}
login('sita@.com','password')


if((user.hasAttendance  ||  user.hasScholarship) && user.hasAttendance){
    console.log(`${user.name} cann give exam`);
}
else{
    console.log(`${user.name} cannot give exam`);
}
