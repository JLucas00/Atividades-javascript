
async function getDados(){
   const id = 1;

   const personagemData = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
   const personagemDataJson =  await personagemData.json();
   console.log(personagemDataJson);

   const name = personagemDataJson.name;
   console.log(name);
   const firstName = name.split(" ");
   console.log(firstName);

   const personagemDataForName = await fetch(`https://rickandmortyapi.com/api/character/?name=${firstName[0]}`)
   const searchForName = await personagemDataForName.json();
   const searchForNameResult = searchForName.results;

   console.log(searchForNameResult);
   document.getElementById("table").innerHTML = `
      <tr>
       <th>Name</th>
       <th>Species</th>
       <th>Status</th>
      </tr>
      `
   searchForNameResult.forEach((element)=>{
      document.getElementById("table").innerHTML += `
      <tr>
         <td>
            ${element.name}
         </td>
         <td>
            ${element.species}
         </td>
         <td>
            ${element.status}
         </td>
      </tr>
      `
   })

}
getDados();