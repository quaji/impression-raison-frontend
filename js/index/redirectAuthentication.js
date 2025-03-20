
const button = document.getElementById("buttonToAuthentication");
if (button) {
    button.addEventListener('click', () => {
        window.location.href = "https://lemon-water-022469c10.6.azurestaticapps.net/authentication";
    });
} else {
    console.error("ボタンが見つかりませんでした: buttonToAuthentication");
}