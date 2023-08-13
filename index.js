let title = document.getElementById('heading');
let names = 'সর্বশেষ |'
let index = 1
const typeWriter = () => {
  let new_title = names.slice(0,index);
  title.innerText = new_title;
  index > names.length ? index = 1 : index++ ;
  
  setTimeout(()=>{
    typeWriter()
  },300)
}
typeWriter()

let secondTile = document.getElementById('heading-2')
let secondNames = 'প্রার্থনামূলক গান প্রশান্তি...'
let i = 1;
const secondType = () => {
   let new_sec_title = secondNames.slice(0,i);
   secondTile.innerText = new_sec_title;
   i > secondNames.length ? i = 1 : i++ ;

   setTimeout(()=> {
      secondType()
   },200)
}

secondType();

function openNav(){
  document.getElementById('sidenav').style.width = '250px'
}
function closeNav(){
  document.getElementById('sidenav').style.width = '0'
}

// width="500" height="315"

// abid gmail new password : abid**$38333678