let users = [
    {
      name: "z",
      surname: "a"
    },
    {
      name: "a",
      surname: "z"
    },
    {
      name: "b",
      surname: "b"
    }
  ];
  
  function byField(arr){
    arr.sort((a,b) => a.name > b.name ? 1 : -1);
  }
  byField(users);

  console.log(users);