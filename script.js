document.getElementsByClassName('btn-orange')[0].addEventListener('click',(event)=>{
    event.preventDefault();
    let name=document.getElementById('exampleInputName').value;
    let email=document.getElementById('exampleInputEmail').value;
    let phone=document.getElementById('exampleInputPhone').value;
    let time=document.getElementById('exampleCheck1').value;
    let date=document.getElementById('exampleCheck2');
    console.log(name, email,phone,time,date);
    addToLocalStorage(name,email,phone,time,date);
    addToPage(name,email,phone)
})

function addToLocalStorage(name,email,phone,time,date)
{
let obj={name:name,
    email:email,
phone:phone,
time:time,
date:date}

localStorage.setItem(email,JSON.stringify(obj));
}
function addToPage(name,email,phone)
{
    const ul=document.querySelector('#ListOfUsers');
    const li=document.createElement('li');

  
    const text=`${name} ${email} ${phone}`;
    const button=document.createElement('button');
    button.appendChild(document.createTextNode('X'));
    button.className="danger";
    li.className="designtext";
   
    li.appendChild(document.createTextNode(text));
    li.appendChild(button);
    ul.appendChild(li);
    
}
const del=document.querySelector('#ListOfUsers')
del.addEventListener('click',deleteUser);
function deleteUser(e)
{
    console.log(e.target.className);
    if(e.target.classList.contains('danger')){
        console.log('danger spotted')
        const email=e.target.parentElement;
        console.log(email);
       // .querySelector('#exampleInputEmail');
        if(email)
        console.log(email.value);
       
        
document.querySelector('#ListOfUsers').removeChild(email)

deleteFromLocal(email);
    }
    

}
function deleteFromLocal(email)
{
console.log(email);
const e_value=email.firstChild.textContent;

const email_val=e_value.split(" ")[1];
console.log(typeof e_value,"neha",email_val);
if(localStorage.getItem(email_val)!=null){
    localStorage.removeItem(email_val)
}
}
