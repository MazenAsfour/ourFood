const allfood=document.querySelectorAll(".item");
const fastfood=document.querySelectorAll('.fastfood');
const arabicfood=document.querySelectorAll('.arabicfood');
const ju=document.querySelectorAll('.juices');
console.log(allfood,fastfood,arabicfood,ju);

function all1(){
    for(var i=0;i<allfood.length;i++){
        allfood[i].style.display="block";
    }
}
function arabic(){

    for(var i=0;i<allfood.length;i++){
        allfood[i].style.display="none";
    }


    for(var i=0;i<allfood.length;i++){
        arabicfood[i].style.display="block";
    }

}
function fast(){
    for(var i=0;i<allfood.length;i++){
        allfood[i].style.display="none";
    }
    for(var i=0;i<allfood.length;i++){
        fastfood[i].style.display="block";
    }
}
function juc(){

    for(var i=0;i<allfood.length;i++){
        allfood[i].style.display="none";
    }


    for(var i=0;i<allfood.length;i++){
        ju[i].style.display="block";
    }

}

