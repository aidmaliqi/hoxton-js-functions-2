/*Using the usual Users and Todo lists:
  - Prompt the user for a letter
  - Find all the users who's name contains the letter 
  - Say hi to those users in the console - but only 1 greeting every 2 seconds.
  - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.

Tips
- Don't forget to clear interval once it's done running
- It's perfectly okay to prompt a user for details while other stuff (i.e.the interval) is running
- Keep your code separated into functions for easier readability later

Challenge
- Prompt the user to enter a property (e.g. 'email' or 'address') and then console.log a list of name - given property. E.g. for email it would look along the lines of: */

//array.filter(function(currentValue, index, arr), thisValue)
let letter = String(prompt("Please type a letter so we can find the User!"))
let list = users.filter(function (user) {
    return user.name.includes(letter)
    
})
console.log(list)



let index = 0
let IntervalId = setInterval(function() {
        console.log(`hello ${list[index].name}`) 
        index++
        if (index === list.length) {
            clearInterval(IntervalId)
        }
} ,2000, list)

let ID = Number(prompt("Please type an ID so we can find the User!"))

let todoList = todos.filter((todo) => {
    
        if (todo.userId == ID) {
            return todo.completed === false
        }
    

})
console.log(todoList)