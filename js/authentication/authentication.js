
const button = document.getElementById("submitButton");
const email = document.getElementById("email");
const caution = document.getElementById("caution");
if (button) {
    button.addEventListener('click', () => {
        if(email.value){
            axios.post(
                "https://impression-raison-backendapps-e7ejecbkdeggergd.japaneast-01.azurewebsites.net/sign/auth",
                {
                    'email':email.value
                }
            ).then(response => {
                if(response.data.link){
                    const link = response.data.link; 
                    window.location.href = link;
                }else if(response.data.message){
                    console.log(response.data.message);
                }
            });
        }else{
            caution.hidden = false;
            email.style.backgroundColor = "rgba(255,0,0,0.5)"
            email.style.borderColor = "rgba(255,0,0,1)"
            console.error("data value is null");
        }
    });
} else {
    console.error("ボタンが見つかりませんでした: buttonToAuthentication");
}