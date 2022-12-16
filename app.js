let markAll = document.querySelector('.mark-all')
let unReadBackground = document.getElementsByClassName('Unread-Notifs')
let OrangePoint = document.getElementsByClassName('point')
let messageCount = document.getElementsByClassName('messageCount')
let neww = document.querySelector('.new')
let funcMarkAll = () => {
    unReadBackground[0].classList.toggle('whiteBackground')
    unReadBackground[1].classList.toggle('whiteBackground')
    unReadBackground[2].classList.toggle('whiteBackground')
    OrangePoint[0].classList.toggle('Removepoint')
    OrangePoint[1].classList.toggle('Removepoint')
    OrangePoint[2].classList.toggle('Removepoint')
    // messageCount.innerText = '0';

   
    messageCount[0].classList.toggle('Removepoint')



}
markAll.addEventListener('click', funcMarkAll)
console.log(messageCount);
console.log(markAll.innerText)
console.log(unReadBackground[0].classList.contains('Unread-Notifs'));
