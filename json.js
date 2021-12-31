 
  
 var card=""   
 function getData(){
     document.getElementById("showdata").innerHTML="Please Wait Data is Loading"
     setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((apiData)=>{
          
           return apiData.json()
        }).then((actualData)=>{
            console.log(actualData)
            var myData=actualData;
            myData.forEach((x) => {
   
                
                card+=` <div class="card">
                <div class="card-img">
                <img src="${x.thumbnailUrl}"></div>
                <div class="card-body">
                <p>Id:${x.name}</p>
                <p>Title:${x.id}</p>
                <p>Phone:${x.title}</p>
              </div>
            </div>`
            });
            document.getElementById("showdata").innerHTML=card
        })
     }, 4000);
 }
 getData()