var NumberOfbuttonOfDrum = document.querySelectorAll(".drum").length;


for(var i=0;i<NumberOfbuttonOfDrum;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function handleClick(){
        alert("I Got Clicked")

    });
}


