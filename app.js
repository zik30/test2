//todo 1111

const regExp = /\d/
let numbersArr =[]
const numbers =(str) =>{
    const arr = str.split("")
    arr.forEach((item)=>{
        if(item.match(regExp)) {
            numbersArr.push(Number(item))
        }
    })
    return console.log(numbersArr)

}

const str = "fg6df8gdg8d7g334455"
numbers(str)

//todo 2222

// const fibonArr = [0, 1]
// let num = 2
//
//
// const recursion = () =>{
//     const time = setTimeout(()=>{
//         fibonArr[num] = fibonArr[num-1]+fibonArr[num-2]
//         num++
//         console.log(fibonArr[num-3])
//         recursion()
//         if(num >= 13){
//             clearTimeout(time)
//         }
//     }, 1000)
// }
// recursion()



//todo 3333

const url = 'https://fakestoreapi.com/products'

const getData = async () => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        data.forEach((item) => {
            const {title} = item
            console.log(title)
        })
    }catch(error){
        console.log(error)
    }finally {
        console.log('finally')
    }

}
getData()


//todo 44444


const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.onclick = () => {
        document.body.style.backgroundColor = button.innerHTML
    }
})


//todo 55555
const click = document.querySelector('.click')
const block = document.querySelector('.block')

click.onclick =() => {
    if( block.style.display === 'block'){
        block.style.display = 'none'
    }else{
        block.style.display = 'block'
    }
}

//todo 6666

const h1 = document.querySelector('h1')
let sec =0
const increase = setInterval( () =>{
    sec++
    h1.innerText = sec
    if(sec === 100) clearInterval(increase)
}, 10)


//todo 7777

const btnGet = document.querySelector('.get')

btnGet.onclick = () =>{

    const getData = async () => {
        try{
            const response = await fetch('products.json')
            const data = await response.json()
            console.log(data)
        }catch(error){
            console.log(error)
        }finally{
            console.log('Finally!!!!!!!')
        }
    }
    getData()
}