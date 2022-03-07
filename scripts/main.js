// Handles the mouseover effect for links
// When moused over, record current color and change the link color to show that it is 
// being moused over. When moused out, change the color back to original
var prevColor;
$('.link')
    .mouseover(function () { 
        prevColor = $(this).css('color');
        $(this).css('color', 'rgb(255, 255, 255)');
    }) 
    .mouseout(function () {
        $(this).css('color', prevColor);
    })    
;


// Handles the accordion-panel interaction when a accordion button is clicked.
// Panel is smoothly transitioned to its set max-height and back to 0 upon clicked.
$('.accordion')
    .click(function () {
        prevColor = $(this).css('background-color');
        $(this).toggleClass('active');

        $(this).find('.accordion-icon').toggleClass('fas fa-chevron-down');
        $(this).find('.accordion-icon').toggleClass('fas fa-chevron-left');

        const panel = $(this).next();
        const panelMaxHeight = panel.css('max-height')
        const panelStatus = panel.css('height');
        if (panelStatus === '0px') {
            panel.css('display', 'block');
            panel.css('height', panelMaxHeight);
        } else {
            panel.css('height', '0');
            setTimeout(function() {
                panel.css('display', 'none');
            }, 200);
        }
    }) 
;

const tooltipText = $('.tooltip-text');
$('.copy-to-clipboard')
    .click(function () {
        var $temp = $('<input>')
        $('body').append($temp);
        $temp.val($(this).text()).select();
        document.execCommand('copy');
        $temp.remove();

        
        tooltipText.text('copied!');
        //prevColor =  tooltipText.css('color');
        tooltipText.css('color', '#61DC0E');
    })
    .mouseout(function () {
        tooltipText.css('color', '#30dfc8');
        tooltipText.text('click to copy');
    })
;

// figure out how to stop using anon functions.
// function mouseoutColor (element, color, other) {
//     console.log('hey')
//     $(element).css('color', color);
//     other;
// }
