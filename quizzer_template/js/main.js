
var awesomeQuiz = {
    loadQuiz:function(){
        $('.panel_one h1').show("drop",500,function(){
            $('.start_quiz').addClass("started",500)
        });

        $('.start_quiz').on('click',function(){
            awesomeQuiz.showPanel(1);
        })
    },
    showPanel:function(position){
        var current = $('div[data-panel="'+ (position - 1)+'"]');
        
        
        current.find('.wrapper').animate({left:"-=100px",opacity:0},500,function(){
            current.addClass('hidden');

            //show next
            var next = $('div[data-panel="'+ position +'"]');
            next.removeClass('hidden');
            awesomeQuiz.showWrapper(next);
        });
    },
    showWrapper:function(next){
        var wrapper = next.find('.wrapper');

        wrapper.fadeIn('500',function(){
            ////
        })
    }
}

$(document).ready(function(){
    awesomeQuiz.loadQuiz();
})