
//AJAX Method


/*function getData(){

    let myRequest =new XMLHttpRequest();
let url ="https://reqres.in/api/users?page=2";
myRequest.open("GET" ,url,true);
myRequest.send();
myRequest .onreadystatechange =function(){
    if(this.readyState===4 && this.status === 200){
        let myDate = JSON.parse(this.responseText);
        let tbody = document.querySelector("tbody");
        let tr ='';
        let tableData =myDate.data;
        for(let i=0 ;i<tableData.length ;i++){
            let id = tableData[i].id
            let name = tableData[i].first_name + tableData[i].last_name;
            let email = tableData[i].email ;
            let img = tableData[i].avatar;
            tr += `
            <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td><img src=" ${img} "  width=40px+
            
            ></td>
            </tr>`
            tbody.innerHTML = tr
        }
    }
if(this.readyState===4){
    tbody.innerHTML = "there is a problem"
}}
}
getData()*/
// fetch data by using promise

let getData =(url)=>{
    return new Promise((resolve ,reject)=>{
        let myRequest = new XMLHttpRequest();
        myRequest.onreadystatechange=function(){
            if(this.readyState===4 &&this.status===200){
                let myDate = JSON.parse(this.responseText);
                resolve(myDate);
                let tbody = document.querySelector("tbody");
        let tr ='';
        let tableData =myDate.data;
        for(let i=0 ;i<tableData.length ;i++){
            let id = tableData[i].id
            let name = tableData[i].first_name + tableData[i].last_name;
            let email = tableData[i].email ;
            let img = tableData[i].avatar;
            tr += `
            <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td><img src=" ${img} "  width=40px+
            
            ></td>
            </tr>`
            tbody.innerHTML = tr}
            }else if(this.readyState===4){
                reject("x")
                
            }
        }
   myRequest.open("GET" , url , true);
myRequest.send();
 });
}
getData("https://reqres.in/api/users?page=2")



/*
//fetch method
let getData = (url) => {
    return new Promise((res) => {
        fetch(url)
            .then((Response) => {
                if (!Response.ok) {
                    throw Error(Response.statusText)
                }
                res(Response.json())
               
                ;
            })
      .catch(err =>console.log(err))
      
        })
    }
    getData("https://reqres.in/api/users?page=2")
    .then(d1=>{return "jjjjjjj"})*/
    


