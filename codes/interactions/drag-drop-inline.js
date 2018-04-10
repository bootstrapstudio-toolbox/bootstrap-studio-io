// Drag Drop Words Inline


$(document).ready(function(){
	
    /* Removes automatically the image on the Slider */
    $('.sld-img').remove();
    
    /*Generate an ID for each draggable element on page */
    $('.drag-el').each(function(index){
        $(this).attr('id', 'draggable-' + index);
    });
    
    var originalPosition;
    
    $('.draggable').draggable({
        scroll: true, 
        scrollSpeed: 25,
        scrollSensitivity: 100,
        revert: true,
        zIndex: 100, 
        refreshPositions: true,
        containment: '#dragdrop-1',
        cursor: 'move', 
        start: function(event, ui){
            $(this).addClass('drag');
            $('.inline-drop').addClass('inline-to-drop');
            $(this).width();
        },
        stop: function(event, ui){
            $(this).removeClass('drag');
            $('.inline-drop').removeClass('inline-to-drop');
        },
        drag: function(event, ui){
            originalPosition = $(this).data({'original-position-left':$(this).css('left'), 'original-position-top':$(this).css('top')});
        },
    });
    
    $('#replace-button').on('click', function(){
         
    });
    
    $('.droppable').droppable({
        tolerance: 'intersect',
        accept: '.drag-el',
        drop: function(event, ui){
            $(this).text('').css({padding: 0});
            $(ui.draggable).detach().prependTo($(this)).css({display: 'inline', width:'100%', height:'100%', top: 0, left: 0, right: 0, bottom: 0});
        }
    });
    
});
