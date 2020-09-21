document.addEventListener('DOMContentLoaded',e=>{

    init();

});

const init = async () => {

    const user = document.getElementById("txtUsuario");
    const pass = document.getElementById("txtContrasenia");
    const form1 = document.getElementById("form1");

    const lblMensaje = document.getElementById("lblMensaje");

    form1.addEventListener('submit',async evt=>{
        
        evt.preventDefault();

        const {error: eU} = user.dataset;
        const {error: eP} = pass.dataset;
        
        if(user.value===''){
            lblMensaje.textContent = eU;
            return;
        }
        
        if(pass.value===''){
            lblMensaje.textContent = eP;
            return;
        }

        const response = await fetch('/api/v1/users',{
            method: 'POST',
            body: JSON.stringify({user: user.value,pass: pass.value}),
            headers: {
                'Content-type':'application/json'
            }
        });
        
        if(response.ok){
            location.href = 'http://intranet.unjfsc.edu.pe/'
        }else{
            console.log("Credenciales incorrectos");
            console.log(response.status);
        }
    });
};