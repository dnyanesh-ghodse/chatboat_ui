const open = document.getElementById('open');
const chatbot = document.querySelector('.chatbot')
const qtn = document.querySelector(".qtn");
const ans = document.querySelector(".ans");


open.addEventListener('click',()=> {
    chatbot.classList.toggle('show')
})

qtn.addEventListener('click', () => {
    ans.classList.toggle('show_ans');
})