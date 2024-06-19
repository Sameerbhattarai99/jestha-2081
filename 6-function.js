users=[{
  name:'sita',
  phone:832838383,
  address:'Abc',

},
{
  name:'gita',
  phone:2838383,
  address:'Ac',

},
{
  name:'nita',
  phone:38383,
  address:'bc',

},

]

 function genders(){

  let genders=['male','female','others']


    let randomLength=genders.length

    let randomValue=Math.random()

    let randomIndex=Math.floor(randomValue*randomLength)

    return genders[randomIndex]
 }
    
   
 console.log(genders());

 function religion(){

 let religion=['hindu','buddist','muslim','christan']
  
  let randomLen=religion.length
  let randomVal=Math.random()
  let randomInd=Math.floor(randomLen*randomVal)
  return religion[randomInd]
 }

 function age(){
    let randomValu=Math.random()
    let randomInde=Math.floor(randomValu*100)
    return randomInde
 }


  console.log(religion());

  function detail(index)
  {
    users[index].genders=genders()

    users[index].religion=religion()

    users[index].age=age()
   
    console.log(users[index])
  }

    detail(0)
    detail(1)
    detail(2)


    function sum(a,b){
      return a+b
    }
    console.log('the sum is',sum(4,5));

    let sum = (a, b) => a + b;
    console.log('The sum is', sum(4, 5));