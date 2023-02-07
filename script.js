let parentdiv =document.getElementById('itembox') 
let hide=document.getElementById('noitemmsg')
let itempopup=document.getElementById('additempopup')
let closebtnlist=document.getElementById('closebtnfornewitem')

function dynId() {
  const dynId = `id-${+ new Date()}`;
  return dynId;
}
let id = dynId();


function additem(){

itempopup.style.visibility='visible'
hide.style.display='none'
}


function createNewList(){
 let value=document.getElementById('inputforitem').value 
 itempopup.style.visibility='hidden';


 //-----------Creating Item Box-------------
     
    var addedDiv=document.createElement('div')
    let id=dynId();
    addedDiv.id=id;
    parentdiv.appendChild(addedDiv);
    addedDiv.style.backgroundColor='white';
    addedDiv.style.width='17%';
    addedDiv.style.height='280px';
    addedDiv.style.borderRadius='10px';
    addedDiv.style.margin='20px'

    



  //----------adding heading to item box---------------  
    
    let headingOfaddedlist =document.createElement('p');
    headingOfaddedlist.innerText=value;
    addedDiv.appendChild(headingOfaddedlist);
    headingOfaddedlist.style.fontSize='40px';
    headingOfaddedlist.style.textAlign='center';
    headingOfaddedlist.style.margin='10px'




    //---------giving line under heading-------------

    let hr=document.createElement('hr');
    addedDiv.appendChild(hr)


//------creating add button inside item box----------

  let addbtnforListItem =document.createElement('img');
  addbtnforListItem.src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-add-icon-png-image_3787746.jpg"
  addedDiv.appendChild(addbtnforListItem)
  addbtnforListItem.style.width='30px';
  addbtnforListItem.style.position='end';
  addbtnforListItem.addEventListener('click',function(){
    document.getElementById('addlistpopup').style.visibility='visible'
    //let listitem=document.createElement('li');

  })
  


//------creating delete button inside list item-----------

let delbtnforlistitem =document.createElement('img');
delbtnforlistitem.src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
addedDiv.appendChild(delbtnforlistitem);
delbtnforlistitem.style.width='30px';


  //----------creating list of activites-------------
 /* let listitem=document.getElementById('li')
  listitem.innerText=
  addedDiv.appendChild(listitem)*/





}
function createNewListItem(){
  document.getElementById('addlistpopup').style.visibility='hidden';
  let list=document.getElementById('inputforlist').value;
  let listitem=document.createElement('li');
  listitem.innerText=list;
  document.getElementById(id).appendChild(listitem)


}


