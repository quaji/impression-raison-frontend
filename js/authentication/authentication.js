
const button = document.getElementById("submitButton");
const email = document.getElementById("email");
if (button) {
    button.addEventListener('click', () => {
        if(email.value){
            axios.post(
                "https://impression-raison-backendapps-e7ejecbkdeggergd.japaneast-01.azurewebsites.net/sign/auth",
                {
                    'email':email.value
                }
            );
        }else{
            console.error("data value is null")
        }
    });
} else {
    console.error("ボタンが見つかりませんでした: buttonToAuthentication");
}