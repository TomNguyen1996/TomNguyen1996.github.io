const answer_no = [        
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really realy sure???",
        "Think again?",
        "Don't believe in second chances?",
        "Why are you being so cold?",
        "Maybe we can talk about it?",
        "I am not going to ask again!",
        "Ok now this is hurting my feelings!",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over.."];

const answer_yes = "Yes";


const no_button = document.getElementById("no-button");
const yes_button = document.getElementById("yes-button");
const message = document.getElementsByClassName('message');




let i  =  1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {

    let banner = document.getElementById("banner");
    if(clicks == 0){
        banner.src = "Public/images/no.gif";
        refreshBanner();
    }


    clicks++;

    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answer_no.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answer_no[i];
        i++;
    } else if (i === total - 1) {
        alert(answer_no[i]);
        i = 1;
        no_button.innerHTML = answer_no[0];
        yes_button.innerHTML = answer_yes;
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }


});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "Public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});


function refreshBanner(){
    let banner = document.getElementById("banner");
    let src = banner.src;
    banner.src = "";
    banner.src = src;
}