const btn =  document.getElementById('send');
const inputName = document.getElementById('name');
const inputAvatar = document.getElementById('avatar');
const inputMessage = document.getElementById('message');
const result = document.querySelector('.chat');

btn.addEventListener('click',(event) => {
    event.preventDefault();
    let userName = inputName.value.toLowerCase();
    console.log(userName);
    userName = userName[0].toUpperCase() + userName.slice(1); //changed name
    let avatarUrl = inputAvatar.value;
    let message = checkSpam(inputMessage.value);
    result.innerHTML = `<div>${userName}</div><img src='${avatarUrl}'/><div>${message}</div>`; clear()
});

const clear = () => {
    inputName.value = '';
    inputAvatar.value = '';
    inputMessage.value = '';
}
const checkSpam = (str) => {
    return str.replace('viagra', '***')
}