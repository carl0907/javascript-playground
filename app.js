/*window.onload = () => {
    //console.log('This is your first program executing!');
    console.log('My Name is CJ');
}*/
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    // ✅ Can use window here 1
} else {
    console.log('You are on the server')
    // ⛔️ Don't use window here 2
}