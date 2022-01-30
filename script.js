let elements = []; //elements ir array


window.onload=function(){
    if(JSON.parse(localStorage.getItem("todo-elements")) != null){
        elements = JSON.parse(localStorage.getItem("todo-elements"));
        console.log(elements);


        let countTotal = elements.length;//count total
        let countRemaining = elements.length;//count remaining
        //let countDome = elements.length;//count done

        document.getElementById("count").innerHTML = countTotal;//count total
        document.getElementById("remaining_done").innerHTML = countRemaining;//count remaining
        //document.getElementById("count_done").innerHTML = countDome;//count done
        show();
    }
    
}

function addElement(){
        if(document.querySelector(".add-text").value.trim() != ""){
            elements.push(document.querySelector(".add-text").value.trim());
            console.log(elements);
            
            if(localStorage.getItem("todo-elements")==null){
                localStorage.setItem("todo-elements",JSON.stringify(elements));
                
            }else{
                localStorage.setItem("todo-elements",JSON.stringify(elements));
            }

            let countTotal = elements.length;//count total
            document.getElementById("count").innerHTML = countTotal;//count total
            let countRemaining = elements.length;//count remaining
            document.getElementById("remaining_done").innerHTML = countRemaining;//count remaining
            show();
            
            
        }else{
            if(document.querySelector(".add-text").value.trim() === ""){
                alert("Please write valid input");
        }
    }
}

//add tasks
function show(){
    document.querySelector(".todo-div").innerHTML = "";
    for(var i = 0; i < elements.length; i++){
        document.querySelector(".todo-div").innerHTML += 
    "<center><div class='element'>" + "<button class='check-btn light-button' onclick='strike(" + i + ")'><i class='bi bi-check-square'></i></button>" + elements[i] + "<button class='delete-btn light-button'onclick='del(" + i + ")'><i class='bi bi-trash'></i></button></div></center>";
    }
}



//check and strike task
function strike(index){
    if(elements[index].includes("<strike>")){ //check if element is having strike throuh or not

    elements[index] = elements[index].replace("<strike>", ""); //remove start tag strike, replace strike with nothing
    elements[index] = elements[index].replace("</strike>", ""); //remove end tag of strike, replace strike with nothing
        {

            let countRemaining = elements.length;
            document.getElementById("remaining_done").innerHTML = countRemaining;//count remaining
            let countDome = elements.length - elements.length;//count done
            document.getElementById("count_done").innerHTML = countDome;//count done
        }
    }else{//if element dont have strike, then add strike to element
    elements[index] = "<strike>" + elements[index] + "</strike>"; //put element in strike
        {
        
            let countRemaining = elements.length -1;
            document.getElementById("remaining_done").innerHTML = countRemaining;//count remaining
            let countDome = elements.length - elements.length + 1;//count done
            document.getElementById("count_done").innerHTML = countDome;//count done
               
        }
 
    }
    if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }else{
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }
    show();//after striking out call display function to see changes
}


//delete task
function del(index){
    elements.splice(index, 1);//remove one current element
    if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }else{
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }

    let countTotal = elements.length;//count total
    document.getElementById("count").innerHTML = countTotal;//count total
    let countRemaining = elements.length;
    document.getElementById("remaining_done").innerHTML = countRemaining;//count remaining
    let countDome = elements.length - elements.length;//count done
    document.getElementById("count_done").innerHTML = countDome;//count done

    show(); //refreshing 
}


//delete all storage -> list
function clearList(){
    localStorage.removeItem('todo-elements');
    window.location.reload();
    show();
}

//clear input field after submiting button
function clearFields() {
     document.getElementById("inputText").value = "";
     show();
}