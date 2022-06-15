const counter_box = document.getElementById('counter_box');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('count');

const cog_btn = document.getElementById('cog_btn');
const btn_box = document.getElementById('btn_box');
var boxOpen = false;
const classArray = ['one','two','three','four','five']

var name = prompt('enter name').toLocaleLowerCase().trim().split(" ").join("");


cog_btn.addEventListener('click',()=>{
    if(boxOpen == false){
        boxOpen = true
        btn_box.style.display="block"
        btn_box.style.width="200px"
        btn_box.style.height="200px"
        
    }
    else{
        boxOpen=false
        btn_box.style.display="none"
        btn_box.style.width="0px"
        btn_box.style.height="0px"
        
    }
})


btn1.addEventListener('click',()=>{
    if(counter_box.children.length == 0){
        const counter_child = document.createElement('div');
        counter_child.className = 'one';
        counter_child.style.backgroundImage = "url('./images/one.png')";
        counter_box.appendChild(counter_child);
        btn2.disabled = false
    }

    else{


        const counter_child = counter_box.lastChild;
    

    if(counter_box.lastChild.className == classArray[0]){
        counter_child.className = classArray[1];
        counter_child.style.backgroundImage = "url('./images/two.png')";
    }
    else if(counter_box.lastChild.className == classArray[1]){
        counter_child.className = classArray[2];
        counter_child.style.backgroundImage = "url('./images/three.png')";
    }
    else if(counter_box.lastChild.className == classArray[2]){
        counter_child.className = classArray[3];
        counter_child.style.backgroundImage = "url('./images/four.png')";
    }
    else if(counter_box.lastChild.className == classArray[3]){
        counter_child.className = classArray[4];
        counter_child.style.backgroundImage = "url('./images/five.png')";
    }
    else if(counter_box.lastChild.className == classArray[4]){
        const counter_child = document.createElement('div');
        counter_child.className = classArray[0];
        counter_child.style.backgroundImage = "url('./images/one.png')";

        counter_box.appendChild(counter_child);
    }
    else{
        alert('there is a problem in program!!')
    }
}

localStorage.setItem(name,JSON.stringify([counter_box.children.length,counter_box.lastChild.className]))

})

btn2.addEventListener('click',()=>{
    
    const counter_child = counter_box.lastChild;

    if(counter_box.children.length === 1 && counter_child.className == classArray[0]){
        counter_box.removeChild(counter_child)
        btn2.disabled = true
    }
    else{        
        if(counter_child.className == classArray[0]){
            counter_box.removeChild(counter_child)
        }
        else if(counter_child.className == classArray[1]){
            counter_child.className = classArray[0];
            counter_child.style.backgroundImage = "url('./images/one.png')"
        }
        else if(counter_child.className == classArray[2]){
            counter_child.className = classArray[1];
            counter_child.style.backgroundImage = "url('./images/two.png')"
        }
        else if(counter_child.className == classArray[3]){
            counter_child.className = classArray[2];
            counter_child.style.backgroundImage = "url('./images/three.png')"
        }
        else if(counter_child.className == classArray[4]){
            counter_child.className = classArray[3];
            counter_child.style.backgroundImage = "url('./images/four.png')"
        }
        localStorage.setItem(name,JSON.stringify([counter_box.children.length,counter_box.lastChild.className]))

    }
})

btn3.addEventListener('click',()=>{
    const getValue = JSON.parse(localStorage.getItem(name))
    const count = ((getValue[0] - 1) * 5)  + classArray.indexOf(getValue[1])+1
    alert(count)
})

window.addEventListener('load',()=>{
    
    const data = JSON.parse(localStorage.getItem(name));
    if(data !== null){

        for(var i=1 ; i <= data[0];i++){
            if(i < data[0]){
                const counterChild = document.createElement('div');
                counterChild.className = classArray[4];
                counterChild.style.backgroundImage = "url('./images/five.png')";
    
                counter_box.appendChild(counterChild);
            }
            else{
                const counterChild = document.createElement('div');
                counterChild.className = data[1];
                counterChild.style.backgroundImage = "url('./images/"+data[1]+".png')";
    
                counter_box.appendChild(counterChild);
                
            }
        }
        

    }

    
})

