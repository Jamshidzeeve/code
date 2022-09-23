
var getlooser = new getLooser;



function getLooser(){
    console.log("Get looser constructor function invoked");
    this.applicants =[];
    this.init = function(){
     
      this.addApplicants();
      this.getRandomUser();
      this.runAgain();
      this.statAgain();
      
    }
    this.checkValid =function (value){
        if(value != '' && this.applicants.indexOf(value) <0){
           
            return true
        }
        return false
    }
   

    this.getRandomUser = function(){
        $this = this;
        var resultBtn = document.querySelector('#show_results')
        function showLooser(){
            console.log("Hi from show looser");
            var resultsContainer = document.querySelector('.results_container');
            var applicantContainer = document.querySelector('.applicant_container');
            resultsContainer.className = 'results_container'
            applicantContainer.className += ' hidden'
            $this.showRandomUser();
        }
        resultBtn.addEventListener('click',function(e){
            if($this.applicants.length >1){
                console.log("Get looser btn clicked")
                showLooser();
            }
            else{
                alert("you need more users");
            }
        })
        
    }
    this.showRandomUser = function(){
        var result = document.querySelector('.result');
        result.innerHTML = ''
        randomUser = this.applicants[Math.floor(Math.random()* this.applicants.length)]
        template = '<h3>' + randomUser + '</h3>'
        result.insertAdjacentHTML('afterbegin',template)
    }
    
    this.deleteItem = function(){
        var $this = this;
        function removeItem(item){
            var attr = parseInt(item.getAttribute('data-id'));
            $this.applicants.splice(attr,1);
            $this.showList();

        }
        var items = document.querySelectorAll('.name-tag');
        for (var i=0; i<items.length;i++){
            items[i].addEventListener('click',function(e){
                removeItem(this);
            })

        }
    }
    this.showList  = function(){
        var parent = document.querySelector('.applicant_list_wrapper');
        var template = '';
        for (var i=0;i < this.applicants.length;i++){
            template +=  '<span class="name-tag" data-id="'+i+'">'+ this.applicants[i] +'</span>'
        }
        parent.innerHTML ='';
        parent.insertAdjacentHTML('afterbegin',template);
        this.deleteItem()

    }
    
    this.addApplicants = function(){
        var $this = this;

        
        function generateList(input){
            
            var value = input.value;
            console.log(value)
            if($this.checkValid(value.toLowerCase())){
                console.log("valid input");
                $this.applicants.push(value.toLowerCase());
                console.log($this.applicants)
                input.value = '';
                $this.showList();
               
                
            }
            else{
              console.log("not a valid input");
              alert("Something went wrong!!!!")
            }

        }

        var addBtn = document.querySelector('#add_applicant');
        addBtn.addEventListener('click',function(){
            var input = document.querySelector('#applicant_value');
            generateList(input);
           
        })


    }
    this.runAgain = function(){
        var $this = this;
        var runAgainBtn = document.querySelector('.run_again')
        runAgainBtn.addEventListener('click',function(e){
            $this.showRandomUser()
        })

    }
    this.statAgain = function(){
        var $this = this;
        var startAgainBtn = document.querySelector('.start_again')
        startAgainBtn.addEventListener('click',function(e){
            var resultsContainer = document.querySelector('.results_container');
            var applicantContainer = document.querySelector('.applicant_container');
            var applicationWrapper = document.querySelector('.applicant_list_wrapper');
            resultsContainer.className += ' hidden';
            applicantContainer.className += 'applicant_container';
            applicationWrapper.innerHTML = '';
            $this.applicants = [];

        })
       


    }
    
    this.init();
}