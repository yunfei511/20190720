document.onscroll=function () {
    var scroll=document.body.scrollTop||document.documentElement.scrollTop;
    var header=document.querySelector('.header');
    if(scroll>440)
        header.style.background='rgba(0,0,0,1)';
    else
        header.style.background='rgba(0,0,0,.3)';
    // document.title=scroll;
}
