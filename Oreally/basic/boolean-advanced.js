let isAccountLocked = false
let userRole = 'admin'

if(isAccountLocked){
    console.log('Is account locked')
} else if(userRole === 'admin') {
    console.log(`Welcome ${userRole}`)
} else{
    console.log('Welcome')
}



//Challenge area

let temp = 15

if (temp <= 32){
    console.log('It is freezing outside')
} else if (temp >= 110) {
    console.log('It is hot outside')
} else {
    console.log('Go for it. It is pretty nice out')
}
