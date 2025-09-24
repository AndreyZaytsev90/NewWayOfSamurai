console.log("Hello Map");

const numbers = [1, 2, 3, 4, 5]
const newArray = numbers.map((num)=> {
return {age: num}
});

console.log(newArray)
console.log(newArray.length)

const words = ["hellow", "world"]

const newWords = words.map((w, i)=> {
    return {numWord: i+1, word: w.length }
})
console.log(newWords)