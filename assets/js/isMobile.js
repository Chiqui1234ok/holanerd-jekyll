function isMobile()
{
    var windowSize = window.innerWidth;
    console.log(windowSize);
    return windowSize<1024?true:false;
}