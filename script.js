/** @format */
// console.log("hello world");
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.filter(Devmap => Devmap.profession === "developer")
     .map(Devmap => console.log(Devmap));
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(DevForeach => {
        if(DevForeach.profession === "developer")
        {
            console.log(DevForeach);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let addnew = {id:4,name:"susan",age:"20",profession:"intern" };
    arr.push(addnew);
    console.log(addnew);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
     console.log(arr.filter(arr => arr.profession !== "admin"));
    
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        { id: 4, name: "Pradyumna", age: "24", profession: "developer" },
        { id: 5, name: "Karan", age: "20", profession: "developer" },
        { id: 6, name: "Mayank", age: "19", profession: "admin" },
      ];

      let newConcatarray = arr.concat(arr2);
      console.log(newConcatarray);
  }