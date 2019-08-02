var content = document.querySelector(`.content`)

const makeButtons = () => {
    var searchBar = document

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphabetArray = alphabet.split("");
    alphabetArray.push('reset')
    
    alphabetArray.forEach(buttonText => {
        var newButton = document.createElement('button');
        newButton.innerHTML =buttonText;
        content.appendChild(newButton)
        console.log(`it worked`)    
    });
    console.log(alphabetArray)
}
makeButtons(0)

