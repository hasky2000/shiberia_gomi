function toggleSideMenu(){
    var sideMenu = document.querySelector('.side_menu');
    sideMenu.style.right = sideMenu.style.right === '0px' ? '-250px' : '0';
}
document.getElementById("notice_trigger").addEventListener("click",function(){
    document.getElementById("notice").style.display="block";
});

function closenotice(){
    document.getElementById("notice").style.display="none";
}