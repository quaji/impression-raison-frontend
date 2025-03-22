const btn = document.getElementById("submitButton");
const tempCode = document.getElementById("tempCode");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const username = document.getElementById("username");

btn.addEventListener("click",()=>{
    if(!tempCode.value)document.getElementById("cautionTC").hidden =false;
    if(!password.value)document.getElementById("cautionP").hidden =false;
    if(!passwordConfirm.value)document.getElementById("cautionPC").hidden =false;
    if(tempCode.value && password.value && passwordConfirm.value){
        if(password.value!=passwordConfirm.value)window.alert("パスワードと確認パスワードが一致していませんでした。");
        else{
            if (btn.classList.contains("disabled")) return;
            btn.classList.add("disabled");
            axios.post("https://impression-raison-backendapps-e7ejecbkdeggergd.japaneast-01.azurewebsites.net/sign/up",
                {
                    "tempCode":tempCode.value,
                    "password":password.value,
                    "username":username.value
                }
            )
            .then(response => {
                if(response.data.link){
                    const  link = response.data.link;
                    if(response.data.message){
                        window.alert(response.data.message);
                    }
                    window.location.href = link;
                }else if(response.data.message){
                    window.alert(response.data.message);
                }
            })
            .catch(error =>{
                console.error(error);
            })
            .finally(() => {
                btn.classList.remove("disabled");
            });
        }
    }
});