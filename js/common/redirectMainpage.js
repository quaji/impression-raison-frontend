window.onload = function(){
    axios.get("https://impression-raison-backendapps-e7ejecbkdeggergd.japaneast-01.azurewebsites.net/sign/auth")
    .then(response => {
        const uid = parseInt(response.data.uid);
        const link = response.data.link;
        if(uid > 100000000){
            window.location.href = link;
        }
    })
    .catch(error=>{
        console.error("ERROR:",error);
    });
};
