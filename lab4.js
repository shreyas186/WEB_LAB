var set=true;
function onLoad(){
    var fntSize=parseInt(document.getElementById("p").style.fontSize);
    document.getElementById("p").style.color="red";
    window.setTimeout(fnts,100,fntSize);
}
function fnts(fntSize){
    if(set==true){
        if(fntSize<=50){
            fntSize+=1;
            document.getElementById("p").style.fontSize=fntSize+"pt";
        }
        else{
            set=false;
            document.getElementById("p").innerHTML="TEXT-SHRINKING";
            document.getElementById("p").style.color="blue";
        }
    }
    else{
        if(fntSize>=5){
            fntSize-=1
            document.getElementById("p").style.fontSize=fntSize+"pt";
        }
        else{
            set=true;
            document.getElementById("p").innerHTML="TEXT-GROWING";
            document.getElementById("p").style.color="red";
        }
    }
    window.setTimeout(fnts,100,fntSize);
}