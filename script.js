 var form1=document.getElementById('my-form');
 form1.addEventListener("submit",addItem);
 var userList=document.getElementById('users');
 


function addItem(event){
    event.preventDefault();
   let username=document.getElementById('name').value;
    var email=document.getElementById('email').value;
   var phone_number=document.getElementById('phone_number').value;
    
    //creating li element
   var item=document.createElement('li');
    
//     //creating Delete Button
   var deleteBtn=document.createElement('button');
  deleteBtn.className='delete';
   deleteBtn.className='btn btn-sm float-right btn-danger delete';
 deleteBtn.appendChild(document.createTextNode('Delete'));
//creating edit Button
   var editBtn=document.createElement('button');
  editBtn.className='edit';
   editBtn.className='btn btn-sm float-right btn-danger edit';
 editBtn.appendChild(document.createTextNode('edit'));


    item.appendChild(document.createTextNode(username+" "+email+" "+phone_number+" "));
   item.appendChild(deleteBtn);
   item.appendChild(editBtn);
   var obj={
       "username":username,
       "email":email,
       "phone":phone_number
  };
    
    
    userList.appendChild(item);

  localStorage.setItem(JSON.parse(JSON.stringify(obj.username)), JSON.stringify(obj));
  localStorage.setItem(username,JSON.stringify(obj));
  document.getElementById('name').value="";
  document.getElementById('email').value=""; 
  document.getElementById('phone_number').value="";
}
 userList.addEventListener('click',deleteItem);
 userList.addEventListener('click',edititem);
 
 function deleteItem(e){
    if(e.target.classList.contains('delete')){
       var li = e.target.parentElement;       
        userList.removeChild(li);
        console.log(Object.keys(e));
        localStorage.removeItem("isTrusted");
    }
    
    
 }
 function edititem(e)
 {
  if(e.target.classList.contains('edit'))
  {
     var li=e.target;
     let data=li.parentNode.textContent;
     let slice=data.split(" ");
     let data2=slice[0];
     
     const user=JSON.parse(localStorage.getItem(data2));
     console.log(user);
    const username=user.username;
     const email=user.email;
     const phone=user.phone;
     localStorage.removeItem(user);
     
     document.getElementById('name').value=username;
     document.getElementById('email').value=email;
     document.getElementById('phone_number').value=phone;
     var li = e.target.parentElement;       
     userList.removeChild(li);
    
  }


  }
