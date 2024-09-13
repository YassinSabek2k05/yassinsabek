function myFun(){
    if(document.getElementById("mode").getAttribute("href")=="dark.css")
        document.getElementById("mode").setAttribute("href","styleSheet.css");
    else   document.getElementById("mode").setAttribute("href","dark.css");
}
function myFunction() {
    document.getElementsByTagName("H1")[0].style.color = "red";
}
function myFunction1() {
    document.getElementsByTagName("H1")[0].style.color = "black";
}
