window.onload = function(){
    axios.get("https://impression-raison-backendapps-e7ejecbkdeggergd.japaneast-01.azurewebsites.net/sign/auth")
    .then(response => {
        if(!response){
            window.Location.href = "";
        }
    })
    .catch(error=>{
        console.error(error);
        window.Location.href = "";
    });
};