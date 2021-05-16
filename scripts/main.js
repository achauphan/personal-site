
var prevColor;
$('.link')
    .mouseover(function () { 
        prevColor = $(this).css('color');
        console.log(prevColor);
        $(this).css('color', 'rgb(255, 255, 255)'); //Why is CSS color represented as a string
    })
    .mouseout(function () {
        $(this).css('color', prevColor);
    })    
;

$('.accordion')
    .click(function () {
        prevColor = $(this).css('background-color');
        $(this).toggleClass('active');

        $(this).find('.accordion-icon').toggleClass('fas fa-chevron-down');
        $(this).find('.accordion-icon').toggleClass('fas fa-chevron-left');

        const panel = $(this).next();
        const panelStatus = panel.css('height');
        if (panelStatus === '0px') {
            panel.css('display', 'block');
            panel.css('height', '550px');
        } else {
            panel.css('height', '0');
            setTimeout(function() {
                panel.css('display', 'none');
            }, 200);
        }
    }) 
;
