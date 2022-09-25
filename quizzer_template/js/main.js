
var awesomeQuiz = {
    settings:{
        results:[],
    },
    loadQuiz:function(){
        $('.panel_one h1').show("drop",500,function(){
            $('.start_quiz').addClass("started",500)
        });

        $('.start_quiz').on('click',function(){
            awesomeQuiz.showPanel(1);
            awesomeQuiz.listenNext();
        })
    },
    showPanel:function(position){
        console.log("clicked on quizzer");
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
          awesomeQuiz.showOptions(next)
        })
    },
    listenNext:function(){
        var next_question = $('.next_question')
        next_question.on('click',function(){
            if(awesomeQuiz.validate_option($(this))){
                var next = $(this).data('next');
                awesomeQuiz.showPanel(next);
                awesomeQuiz.showProgressAndStore(next);

            }
        })
    },
    validate_option: function($this){
        var parent = $this.parents().eq(1);
        console.log(parent)
        if (parent.hasClass('valid')){
            return true
        }
        else{
            $('.error').fadeIn(300,function(){
                $(this).delay(1000).fadeOut();
            })
        }

    },
    showProgressAndStore: function(next){
        $('.bar').animate({'width':'+=25%'});
        var options =$('div[data-panel="'+(next -1)+'"]').find('.options');
        options.find('div').each(function(index,el){
            if($(this).hasClass('active')){
                awesomeQuiz.settings.results.push($(this).text());
                console.log(awesomeQuiz.settings.results);
            }
        })
    },
    showOptions:function(next){
        var options = next.find('.options');
        var childrens = options.find('div');
        var counter = 0;
        childrens.each(function(index,element){
           
           $(element).delay(counter).fadeIn(300);
           counter +=500;
        });

        childrens.on('click',function(){
            
            childrens.removeClass('active');
            next.addClass('valid');
            $(this).addClass('active');
            
        })
       
    },
}

$(document).ready(function(){
    awesomeQuiz.loadQuiz();
})