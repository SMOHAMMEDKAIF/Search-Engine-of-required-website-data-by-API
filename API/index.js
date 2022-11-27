// fetch('https://fakestoreapi.com/products').then(function(res){
    
//         return res.json()//collect;
//         // console.log("x:",x)
    
//     })
//     .then(function(res){
//         console.log('res:',res)
//     })
//     .catch(function(err){
//         console.log('err:',err);
//     })

// http://img.omdbapi.com/?apikey=[yourkey]




// let key="5ea01854";
// async function getData(){
//     try{
//         let res = await fetch(`http://img.omdbapi.com/?apikey=${key}`);

//         let data = await res.json();
//         console.log("data:",data);
//     } catch(err){
//         console.log('err:',err);
//     }
// }

// getData();

async function main(){

        try{

            let query = document.getElementById("query").value;
            console.log("query",query);
            let res = await fetch(`http://www.omdbapi.com/?apikey=5ea01854&s=${query}`);
        
            let data = await res.json();
            // console.log("data",data);
            let actual_data=data.Search;
            console.log("actual_data:",actual_data)
            if(actual_data!=undefined){
                appendMovies(actual_data)
            }
            
            // return data.Search;
        }catch(err){
            console.log("err:",err)
        }
   
 }

 let movies=document.getElementById("container")
let id;
 function appendMovies(data){

        movies.innerText=null
        data.forEach(function(ele){

            let p =document.createElement('p');
            p.innerText=ele.Title;

            movies.append(p);
        })

 }

//debounce
 function debounce(func, delay){

    if(id){
        clearInterval(id)
    }
    
    id = setTimeout(function(){
        func();
    },delay);
 }