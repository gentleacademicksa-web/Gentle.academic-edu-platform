function sendHomework(event){
 event.preventDefault();
 const name=document.getElementById('studentName').value;
 const subject=document.getElementById('subject').value;
 const message=document.getElementById('message').value;
 const text=`السلام عليكم، أنا الطالب ${name}.\nالمادة: ${subject}\nالواجب: ${message}`;
 window.open('https://wa.me/966533739123?text='+encodeURIComponent(text),'_blank');
}

const buttons=document.querySelectorAll('.btn');
buttons.forEach(button=>button.addEventListener('click',()=>{
 console.log('Welcome to Gentle Academic Platform');
}));
