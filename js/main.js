// const getUsers = new Promise((resolve, reject)=>{
//   const err = false
//   setTimeout(()=>{
//     if(err){
//       reject({error: true,msg:"error yassta"})
//     }else{
//       resolve([0,1,2,3,4,5])
//     }
//   },2000);
// })

// const getPosts = new Promise((resolve, reject)=>{
//   const err = false
//   setTimeout(()=>{
//     if(err){
//       reject({error: true,msg:"error yassta"})
//     }else{
//       resolve(["a", "s", "d", "c"])
//     }
//   },2000);
// })

// const getComment = new Promise((resolve, reject)=>{
//   const err = false
//   setTimeout(()=>{
//     if(err){
//       reject({error: true,msg:"error yassta"})
//     }else{
//       resolve([0,1,2,3,4,5])
//     }
//   },2000);
// })

// getUsers.then((data)=>{
//   console.log(data);
//   return getPosts
// })
//   .then((post)=>{
//     console.log(post)
//     return getComment
//   })
//   .then((comment)=>{
//     console.log(comment)
//   })


const apiUrl= "https://jsonplaceholder.typicode.com"

fetch(`${apiUrl}/posts`)
  .then((result)=>{
    return result.json() 
  })
  .then((data)=>{
    console.log(data)
    data.foreach((element)=>{
      // const li =document.createElement = ("li")
      // li.innerText = `${element}`
      // body.appendChild(li)
      // console.log(element)
    })
  })
  .catch((err)=>{
    // throw Error(err)
  })
  .finally(()=>{
    
  })