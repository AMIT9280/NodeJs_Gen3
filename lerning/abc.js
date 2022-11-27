users = [
    {
        name:"samir",
        age:20
    },
    {
        name:"sanjay",
        age:45
    },
    {
        name:"amit",
        age:20
    }
]

console.log(users)
users = users.filter((user)=>{
    return user.name.startsWith("s")
})
console.log(users)