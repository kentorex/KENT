// target
// const form1 =  document.getElementById('form-1');
// const form2 = document.getElementById('form-2');
// const msg =  document.getElementById('msg');

// document.querySelector('#age').addEventListener('change', function(ev){
//     let selected = ev.target.value;
//     // console.log(selected);
//     if (selected == '18-30'){
//        form1.classList.remove('no-display');
//        form2.classList.add('no-display')
//        msg.classList.add('no-display')
//     }else if (selected == '31-80'){
//         form1.classList.add('no-display')
//         form2.classList.remove('no-display')
//         msg.classList.add('no-display')
//     }else{
//        form2.classList.add('no-display')
//        form1.classList.add('no-display')
//        msg.classList.remove('no-display')
//        msg.innerHTML = "<h2 style='color:red'>No form mapped for this age range</h2>"
//     }
// })

        let username = document.querySelector('.username');
        let password = document.querySelector('.password');
        let email = document.querySelector('.email')
        
        // username.addEventListener('keyup', function(ev){
        //     let user = ev.target.value;
        //     let code = ev.keyCode;
        //     // console.log(code);
        //     if (code == 38){
        //         alert('closed')
        //     }
        // });

        /* 
        ^ = beginning
        $ = end
        [] = range of characters
        {} = range of numbers
        g = global
        */

        let c = 'chika'
        let regex = /^[a-zA-Z0-9]{1,6} $/;

        if(c.match(regex)){
            console.log('matched');
        }else{
            console.log('does not match');
        }

        // validation continues
        const  btn = document.querySelector ('.btn')
        btn.addEventListener("click", (e)=>e.preventDefault())

        function submitForm(){
            if(username.value == ''){
                username.classList.add('invalid')
                username.classList.remove('valid')
                return false
            }else{
                username.classList.add('valid')
                username.classList.remove('invalid')
            }

            if(email.value == ''){
                email.classList.add('invalid')
                email.classList.remove('valid')
                return false
            }else{
                email.classList.add('valid')
                email.classList.remove('invalid')
            }

            if(password.value == ''){
                password.classList.add('invalid')
                password.classList.remove('valid')
            }else{
                password.classList.add('valid')
                password.classList.remove('invalid')
            }
        }

        // ikechhukwu@gmail.com
        const  message = document.querySelector ('.message')

        email.addEventListener('keyup', function(ev){
            if(email.value.match(/^[a-zA-Z0-9_#*]{4,10}@[a-z]{3,7}.[a-z]{3,5}$/)){
                message.innerHTML = "<span style= 'color:green'>Correct</span>"
            }else{
                message.innerHTML = "<span style= 'color:red'>Inorrect email address</span>"
                email.classList.add('invalid');
            }
        });

        const v_weak = document.querySelector('very-weak')
        const strong = document.querySelector('strong')
        const v_strong = document.querySelector('very-strong')
        password.addEventListener('keyup', function(){
            if(password.value.length < 5){
                v_weak.classList.remove('no-display');
                strong.classList.add('no-display');
            }else if (password.value.match(/^[a-zA-Z0-9]{5,10}$/)){
                strong.classList.remove('no-display');
                v_weak.classList.add('no-display');
            }else if (password.value.match(/^[a-zA-Z0-9_/<>.*"^&@!(){}]{11,20}$/)){
                strong.classList.add('no-display');
                v_weak.classList.add('no-display');
                v_strong.classList.remove('no-display');
            }
        })