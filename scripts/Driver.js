function load_Contraint(){

  let choice=document.getElementById("Strategy").value;
  let constraint=document.getElementById("constraint");
  let constraintHead=document.getElementById("constraintHeader");
  let learnRedirect;

  switch(choice){

    case "AES":
      var c = AES.constraint();
      learnRedirect=function(){
        window.open('https://en.wikipedia.org/wiki/Advanced_Encryption_Standard')
      }

      document.getElementById("learnButton").onclick=learnRedirect;
      document.getElementById("key").disabled = false;
      break;

    case "DES":
      var c = DES.constraint();
      learnRedirect=function(){
        window.open('https://en.wikipedia.org/wiki/Data_Encryption_Standard')
      }

      document.getElementById("learnButton").onclick=learnRedirect;
      document.getElementById("key").disabled = false;
      break;

    case "Blowfish":
      var c = BF.constraint();
      learnRedirect=function(){
        window.open('https://en.wikipedia.org/wiki/Blowfish_(cipher)')
      }
      document.getElementById("learnButton").onclick=learnRedirect;
      document.getElementById("key").disabled = false;
      break;

    case "MASC":
      var c = Masc.constraint();
      learnRedirect=function(){
        window.open('https://en.wikipedia.org/wiki/Substitution_cipher')
      }
      document.getElementById("learnButton").onclick=learnRedirect;
      document.getElementById("key").disabled="disabled";
      break;

    case "PSC":
      var c = Psc.constraint();
      learnRedirect=function(){
        window.open('https://en.wikipedia.org/wiki/Substitution_cipher#Polyalphabetic_substitution')
      }
      document.getElementById("learnButton").onclick=learnRedirect;   
      document.getElementById("key").disabled = false;
      break;

    case "PlayFair":
      var c = PlayFairCipher.constraint();
      learnRedirect=function(){
        window.open('https://en.wikipedia.org/wiki/Playfair_cipher')
      }
      document.getElementById("learnButton").onclick=learnRedirect;
      document.getElementById("key").disabled = false;
      break;

    case "HillCipher":
      var c = HillCipher.constraint();   
      learnRedirect=function(){
        window.open('https://en.wikipedia.org/wiki/Hill_cipher')
      }  
      document.getElementById("learnButton").onclick=learnRedirect;
      document.getElementById("key").disabled = false;
      document.getElementById("key").value = "LIHH";
      break;

    case "RailFence":
      var c = RailFence.constraint();
      learnRedirect=function(){    
        window.open('https://en.wikipedia.org/wiki/Rail_fence_cipher')
      }
      document.getElementById("learnButton").onclick=learnRedirect;
      document.getElementById("key").disabled="disabled";
      break;

    case "sft":
      var c = ColumnTransposition.constraint();
      learnRedirect=function(){
        window.open('https://en.wikipedia.org/wiki/Transposition_cipher')
      }
      document.getElementById("learnButton").onclick=learnRedirect;
      document.getElementById("key").disabled="disabled";
      break;

    case "vernam":
      var c = VernamCipher.constraint();     
      learnRedirect=function(){
        window.open('https://nptel.ac.in/courses/117101055/cdeep%20demo%20ppt/vernam.html')
      }
      document.getElementById("learnButton").onclick=learnRedirect;
      document.getElementById("key").disabled = false;
      break;


  } 

  let constraintHeader="<h3 style='border: 1px dashed'>Limitations :</h3>";
  let constraintStr="<ul>";
   for(i of c)
      constraintStr+= "<li> "+i+" </li>";
  constraintStr+="</ul>";

  constraintHead.innerHTML=constraintHeader;
  constraint.innerHTML=constraintStr;
      

}


function encrypt_Driver(){

  let choice=document.getElementById("Strategy").value;
  let toEncrypt=document.getElementById("toEncrypt").value;
  let key=document.getElementById("key").value;
  let cipherText;

  switch(choice){

    case "AES":

      if(key.length!=16 && key.length!=32 && key.length!=24){
        alert("Key size must be 16, 24 or 32 bytes");
        return;
      }
      let aes=new AES();
      cipherText = aes.Encrypt_Driver(toEncrypt,key);
      document.getElementById("encryptedText").value=cipherText;
      showSnack();
      break;


    case "Blowfish":
      let bf=new BF();
      cipherText = bf.Encrypt_Driver(toEncrypt,key);
      document.getElementById("encryptedText").value=cipherText;
      showSnack();
      break;

   
    case "MASC":
      let masc=new Masc();
      cipherText = masc.Encrypt_Driver(toEncrypt);
      document.getElementById("encryptedText").value=cipherText[0];
      document.getElementById("key").value=cipherText[1];
      showSnack();
      break;


    case "PSC":
      let psc=new Psc();
      cipherText = psc.Encrypt_Driver(toEncrypt,key);
      document.getElementById("encryptedText").value=cipherText;
      showSnack();
      break;


    case "PlayFair":
      let playFair=new PlayFairCipher();
      cipherText = playFair.Encrypt_Driver(toEncrypt,key);
      document.getElementById("encryptedText").value=cipherText;
      showSnack();
      break;

    case "HillCipher":
      if(key.length==4){
        for(let i=0;i<4;i++){

          if(key.charAt(i)<'A'|| key.charAt(i)>'Z'){
            alert("The key specified must have exactly 4 letters in uppercase !")
            return;
          }
       
          }

       let hillCipher=new HillCipher();
      cipherText = hillCipher.Encrypt_Driver(toEncrypt,key);
      document.getElementById("encryptedText").value=cipherText;
      
      }
      else{
        alert("The key specified must have exactly 4 letters in uppercase !")
        return;
      }
      showSnack();
      break;
      

    case "RailFence":
      let railFence=new RailFence();
      cipherText = railFence.Encrypt_Driver(toEncrypt);
      document.getElementById("encryptedText").value=cipherText;
      showSnack();
      break;

    case "sft":
      let sft=new ColumnTransposition();
      cipherText =  sft.Encrypt_Driver(toEncrypt);
      document.getElementById("encryptedText").value=cipherText;
      showSnack();
      break;

    case "vernam":
      if(toEncrypt.length<key.length){
        alert("The key specified should be smaller in length than the plain Text that is to be encrypted !")
        return;
      }
      let vernam=new VernamCipher();
      cipherText = vernam.Encrypt_Driver(toEncrypt,key);
      document.getElementById("encryptedText").value=cipherText;
      showSnack();
      break;
  }
}

function decrypt_Driver(){

  let key=document.getElementById("key").value;
  let toDecrypt=document.getElementById("toDecrypt").value;
  let choice=document.getElementById("Strategy").value;
  let plainText;

  switch(choice){

    

    case "AES":

       if(key.length!=16 && key.length!=24 && key.length!=32){
        alert("Key size must be 16, 24 or 32 bytes");
        return;
      }
      let aes=new AES();
      plainText = aes.Decrypt_Driver(toDecrypt,key);
      document.getElementById("decryptedText").value=plainText;
      break;

    case "Blowfish":

      let bf=new BF();
      plainText = bf.Decrypt_Driver(toDecrypt,key);
      document.getElementById("decryptedText").value=plainText;
      break;

    case "MASC":
      let masc=new Masc();
      plainText = masc.Decrypt_Driver(toDecrypt,key);
      document.getElementById("decryptedText").value=plainText;
      break;

    case "PSC":
      let psc=new Psc();
      plainText = psc.Decrypt_Driver(toDecrypt,key);
      document.getElementById("decryptedText").value=plainText;
      break;


    case "PlayFair":
      let playFair=new PlayFairCipher();
      plainText = playFair.Decrypt_Driver(toDecrypt,key);
      document.getElementById("decryptedText").value=plainText;
      break;

    case "HillCipher":

      if(key.length==4){
        for(let i=0;i<4;i++){

          if(key.charAt(i)<'A'|| key.charAt(i)>'Z'){
            alert("The key specified must have exactly 4 letters in uppercase !")
            return;
          }
       
          }

      let hillCipher=new HillCipher();
      plainText = hillCipher.Decrypt_Driver(toDecrypt,key);
      document.getElementById("decryptedText").value=plainText;
     
    }
     else{
            alert("The key specified must have exactly 4 letters in uppercase !")
            return;
          }
           break;

    case "RailFence":
      let railFence=new RailFence();
      plainText = railFence.Decrypt_Driver(toDecrypt);
      document.getElementById("decryptedText").value=plainText;
      break;

    case "sft":
      let sft=new ColumnTransposition();
      plainText = sft.Decrypt_Driver(toDecrypt);
      document.getElementById("decryptedText").value=plainText;
      break;

    case "vernam":
      if(toDecrypt.length<key.length){
        alert("The key specified should be smaller in length than the cipher Text that is to be decrypted !")
        return;
      }
      let vernam=new VernamCipher();
      plainText = vernam.Decrypt_Driver(toDecrypt,key);
      document.getElementById("decryptedText").value=plainText;
      break;

  }
}


