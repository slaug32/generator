let namepass = document.getElementById("namepass");

function genPassword() {
   let mass = "acdeghilmnoprstuvwxyz";
   let namepassLength = 4;
   let namepass = "";

   for (let i = 0; i <= namepassLength; i++) {
      let randomNumber = Math.floor(Math.random() * mass.length);
      namepass += mass.substring(randomNumber, randomNumber + 1);
   }

   document.getElementById("namepass").value = namepass;
}

