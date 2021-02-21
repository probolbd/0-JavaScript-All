//evenlistener add function or process 
// document.getElementById('Tarekul').addEventListener('click', colorAdd)
function colorAdd() {
    document.body.style.color ="pink";
}
const colorbtn = document.getElementById('Tarekul');

// colorbtn.addEventListener('click', colorAdd);
colorbtn.onclick = colorAdd;
const image = document.getElementById('div_1').addEventListener('click', function(){
    document.body.style.color="Green";
})
const head = document.getElementById("title_1");
head.onclick= function(){
    document.body.style.background="purple"
}
//how to add child in html
document.getElementById('add').addEventListener('click', function(){
    const added = document.getElementById('items');
    const NewItem =document.createElement('li');
    NewItem.innerText='random';
    added.appendChild(NewItem);
})
// remove child form inner element
document.getElementById('items').addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target);
})