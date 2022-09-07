



let animateHeight = ()=>
{
    $('.ContainerMoi').animate
    (
        {
            height  : '1500px',
        }
        ,
        2000 //ms
        ,
        ()=>
        {
            animateH1();
        }
    )
}

let animateH1 = ()=>
{
    $('.ContainerMoi h1').fadeIn(2000);
    setTimeout(animateCards(),2000);
}

let animateCards = ()=>
{
    $('.card').slideDown(2000);
}




$('document').ready
(
    ()=>
    {
        $('.ContainerMoi').animate
        (
            {
                width   : '100%',
            }
            , 
            2000    // ms 
            , 
            ()=>
            {
                animateHeight();
            }
        );
    }
);









