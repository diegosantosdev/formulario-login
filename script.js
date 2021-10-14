 const init = () =>{
        const inputEmail = document.querySelector('input[type="email"]');
        const inputPassword = document.querySelector('input[type="password"]');
        const submitButton = document.querySelector('.login_submit');
       if(submitButton) {
           submitButton.addEventListener('click',(event) => {
               event.preventDefault();

               fetch('https://regres.in/api/login', { method:'post',
                   Headers: {
                       'content-Type': 'application/json'
                   },
                   body: JSON.stringify({
                       email: inputEmail.value,
                       password: inputPassword.value,
                   })
               }).then((Response) =>{
                   return Response.json();
               }).then((data) =>{
                   console.log(data)
               })
           })
       }
    }

window.onload = init;