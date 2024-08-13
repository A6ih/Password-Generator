const passwordFeild = document.getElementById("passwordFeild");
const generatePassword = document.getElementById("generatePassword");
const copyPassword = document.getElementById("copyPassword")

let passwords = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                 "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                 "u", "v", "w", "x", "y", "z", "A","B","C","D","E",
                 "F","G","H","I","J","K","L","M","N","O","P","Q","R",
                 "S","T","U","V","W","X","Y","Z", "0", "1", "2", "3",
                 "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "{",
                 "}"]

generatePassword.onclick = function() {
    let randomIndex1 = Math.floor(Math.random() * passwords.length)
    let randomIndex2 = Math.floor(Math.random() * passwords.length)
    let randomIndex3 = Math.floor(Math.random() * passwords.length)
    let randomIndex4 = Math.floor(Math.random() * passwords.length)
    let randomIndex5 = Math.floor(Math.random() * passwords.length)
    let randomIndex6 = Math.floor(Math.random() * passwords.length)
    let randomIndex7 = Math.floor(Math.random() * passwords.length)
    let randomIndex8 = Math.floor(Math.random() * passwords.length)
    passwordFeild.textContent = passwords[randomIndex1] + passwords[randomIndex2] + passwords[randomIndex3] +
                                passwords[randomIndex4] + passwords[randomIndex5] + passwords[randomIndex6] +
                                passwords[randomIndex7] + passwords[randomIndex8] + " ";
}
