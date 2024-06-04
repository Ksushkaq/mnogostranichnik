const Open = Document .getElementByld('open');
const PopClose = Document .getElementByld('pop-close');
const popUp =Document .getElementByld('pop-up');

Open.addEventListener('click', function(e){
    e.preventDefault();
    popUp.clasList.add('active');

})
PopClose.addEventListener('click',() =>{
    popUp.clasList.remove('active');


})