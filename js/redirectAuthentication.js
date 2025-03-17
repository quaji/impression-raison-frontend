window.onload = function(){
    axios.get("https://impression-raison-backendapps-e7ejecbkdeggergd.japaneast-01.azurewebsites.net/sign/auth")
    .then(response => {
        const uid = response.data.uid;
        console.log("response",uid);
        if(uid){
            window.Location.href = "https://lemon-water-022469c10.6.azurestaticapps.net/authentication";
        }
    })
    .catch(error=>{
        console.error(error);
        window.Location.href = "https://lemon-water-022469c10.6.azurestaticapps.net/authentication";
    });
};