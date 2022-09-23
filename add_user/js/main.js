var myDatabase = [
    {name:"jamshid",email:"jamshu.mkd@gmail.com",age:32},
    {name:"Shebini",email:"shebini.mkd@gmail.com",age:23},
    {name:"Tahani",email:"tahani.mkd@gmail.com",age:3},
];

(function Avatar(db)
{
    console.log("starting.....");

    var init = function(){
        generateList();
        enterUser();
    }

    var generateList = function(){
       var parent = document.querySelector('#parent_avatars');
       var template='';
       for(var i=0;i<db.length;i++){
        template +=   '<div class="col-sm-4">'
        template +=                    '<div class="card">'
        template +=                     '<div class="card-delete" data-card="'+ i +'">X</div>'
        template +=             '<div class="card-block">'
        template +=                '<h3 class="card-title">'+ db[i].name +'</h3>'
        template +=                 '<p class="card-text">'
        template +=                     '<strong>Email</strong>: <span>'+ db[i].email  +'</span>'
        template +=                 '</p>'
        template +=                 '<p class="card-text">'
        template +=                     '<strong>Age</strong>: <span>' + db[i].age + '</span>'
        template +=                 '</p>'
        template +=                        '</div>'
        template +=                    '</div>'
        template +=     '</div>'

       }
       parent.innerHTML ='';
       parent.insertAdjacentHTML('afterbegin',template);
       deleteCard();
    }
    var enterUser = function(){
    
        var grabUser = function(){
            var name = document.querySelector('#user_name').value
            var email = document.querySelector('#user_email').value
            var age = document.querySelector('#user_age').value
            elements = [name,email,age]
            if(validateUser(elements)){
                console.log('true');
                document.querySelector('#myForm').reset();
                db.push({name:name,email:email,age:age});
                generateList();
            }
            else{
                console.log("false")
                document.querySelector('#error').style.display = 'block';
                setTimeout(function(){
                    document.querySelector('#error').style.display = 'none';
                },2000)
            }
        }

        document.querySelector('#myForm').addEventListener('submit',function(event){

            event.preventDefault();
            grabUser();

        })
    }
    var validateUser = function(elements){
        for(i=0;i<elements.length;i++){
            if(elements[i]==''){
                return false;

            }
        }
        return true
    }
    function deleteThisCard(element){
        var obj = parseInt(element.getAttribute('data-card'));
        console.log(obj);
        db.splice(obj,1);
        generateList();
    }
    var deleteCard = function(){
        buttons = document.querySelectorAll('.card-delete');
        for (var i=0;i<buttons.length;i++){
            buttons[i].addEventListener('click',function(event){
                deleteThisCard(this);
            })
        }
    }
    init();

    }
(myDatabase))