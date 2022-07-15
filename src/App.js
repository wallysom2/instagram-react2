import Comment from "./components/Comment"

function App()
    {
    return (   
    <>
    <h1>Hello World</h1>
    <Comment titulo="first" assunto= "primeiro ass" texto = "texto1 texto1texto1texto1"/>
    <Comment titulo="segundo" assunto= "segundo ass" texto = "segundo texto1texto1texto1"/>
    </>
    )
    } 

//Create a function called sumInternalProductor(arr), which receives an array of arrays, then the function must sum the product of multiplying the elements of the internal arrays.  Ex arr = [ [5], [12, 3, 0], [2, 3, 5] ] => Should return 35
function sumInternalProductor(arr)
    {
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
        {
        for(let j = 0; j < arr[i].length; j++)
            {
            sum += arr[i][j]
            }
        }
    return sum
    }







 




  
  export default App;