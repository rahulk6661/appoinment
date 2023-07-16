 var form1=document.getElementById('my-form');
 form1.addEventListener("submit",addItem);
 var userList=document.getElementById('users');
 


function addItem(event){
    event.preventDefault();
   var username=document.getElementById('name').value;
    var email=document.getElementById('email').value;
   var phone_number=document.getElementById('phone_number').value;
    
    //creating li element
   var item=document.createElement('li');
    
//     //creating Delete Button
   var deleteBtn=document.createElement('button');
  deleteBtn.className='delete';
   deleteBtn.className='btn btn-sm float-right btn-danger delete';
 deleteBtn.appendChild(document.createTextNode('Delete'));


    item.appendChild(document.createTextNode(username+" "+email+" "+phone_number+" "));
   item.appendChild(deleteBtn);
   var obj={
       "username":username,
       "email":email,
       "phone number":phone_number
  };
    
    
    userList.appendChild(item);

  localStorage.setItem(JSON.parse(JSON.stringify(obj.username)), JSON.stringify(obj));
  localStorage.setItem(username,JSON.stringify(obj));
    
    
}
 userList.addEventListener('click',deleteItem);

 function deleteItem(e){
    if(e.target.classList.contains('delete')){
       var li = e.target.parentElement;       
        userList.removeChild(li);
        console.log(Object.keys(e));
        localStorage.removeItem("isTrusted");
    }
 }