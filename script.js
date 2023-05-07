var index=0;
function changecolour(){
    var colour=["red" , "blue" , "yellow" , "green"  , "pink" , "purple"];
    style = document.getElementsByTagName("body")[0].style.background = colour[index++];
    if(index> colour.length-1){
        index = 0;
    }
}