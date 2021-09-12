
 document.getElementById("btn").addEventListener("click",getimg)
  let image= document.getElementById("img")

 function getimg(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data)
        image.src=data.message
    })
     .catch(err=>console.log(err))
}