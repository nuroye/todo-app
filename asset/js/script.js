
var item= document.getElementById("todo");
var button= document.getElementById("bt");
var ul= document.querySelector("ul");


button.addEventListener("click", function(){
     if(item.value.length > 0){
     var list = document.createElement("li");
     var trash= document.createElement("span");
     list.appendChild(document.createTextNode(item.value));
     ul.appendChild(list);
     item.value="";
    }
})
item.addEventListener("keypress", function(enter){
    if (item.value.length > 0 && enter.keyCode === 13) {
        var list = document.createElement("li");
        var trash= document.createElement("span","i");
        trash.innerHTML="span";
        list.appendChild(document.createTextNode(item.value));
        ul.appendChild(list);
        item.value="";
    
      }
    })

  
  
   
/*
 var inputText= document.querySelector('#todo');
 var myButton= document.querySelector('.btn');
 var list = document.querySelector('ul');



myButton.addEventListener('click', (event)=>{
  if(inputText.value != ""){
    event.preventDefault(); 
   
    // Creating li
    var myLi = document.createElement('li');
        myLi.innerHTML = inputText.value; 
        list.appendChild(myLi);
        inputText.value="";
       
      
        //create span
       var mySpan = document.createElement('span');
       mySpan.innerHTML= 'Delete';
       myLi.appendChild(mySpan);
      
      }
     
      var close = document.querySelectorAll('span');
      for(let i=0; i < close.length; i++){
        close[i].addEventListener('click', ()=>{
          close[i].parentElement.style.opacity = 0;
          close[i].parentElement.style.display="none";
          close[i].parentElement.remove();
        
        }) 
      } 
      //Clear all todos

var par= document.getElementById("mylist");
var button = document.getElementById("remBtn")
var clear = document.getElementById("myList")

button.addEventListener("click", function(){
  par.removeChild("ul myLi"); 
})
  
  
          
});



        

/* myButton.addEventListener('keypress', (event)=>{
  if(inputText.value != "" && event.keyCode ===13){
    event.preventDefault(); 

    var myLi = document.createElement('li');
        myLi.innerHTML = inputText.value; 
        list.appendChild(myLi)
        inputText.value=""
        */