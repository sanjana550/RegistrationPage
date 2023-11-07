document.getElementsByClassName('btn-orange')[0].addEventListener('click',(event)=>{
    event.preventDefault();
    let name=document.getElementById('exampleInputName').value;
    let email=document.getElementById('exampleInputEmail').value;
    let phone=document.getElementById('exampleInputPhone').value;
    let time=document.getElementById('exampleCheck1').value;
    let date=document.getElementById('exampleCheck2');
    console.log(name, email,phone,time,date)
})