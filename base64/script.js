const fileUp = document.getElementById("fileUp");

function encodeImageFileURL(){
   const fileSelect = fileUp.files
   console.log(fileSelect);
   if (fileSelect.length > 0){
      const fileSelector = fileSelect[0];
      console.log(fileSelector)
      const fileReader = new FileReader();
      console.log(fileReader);

      fileReader.onload = function (FileLoadEvent){
         const imgData = FileLoadEvent.target.result;
         console.log(imgData)
         document.getElementById("imageFile").src = imgData;
         document.getElementById("base64").innerHTML = imgData;
      }
      fileReader.readAsDataURL(fileSelector);
   }
   
}



fileUp.addEventListener("change", function(){
   encodeImageFileURL();
})