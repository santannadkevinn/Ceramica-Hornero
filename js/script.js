
count = 0
function changeAll() {
    let article = document.querySelector('section')
    if(count % 2 == 0){
        document. getElementById('url').style.display = 'none'
        const body = document.querySelector('body')
        body.style.backgroundColor = 'white'
        article.style.display = 'block'
        document.querySelector('footer').style.display = 'block'
        
    }
    if(count % 2 == 1){
        document. getElementById('url').style.display = 'block'
        article.style.display = 'none'
        document.querySelector('footer').style.display = 'none'
    }
    count++
}

const change = document.querySelector('[change-all]')
change.onclick = changeAll


// function imageClick(){
//     setTimeout(function(){document.querySelector('#logo').src = './imagens/giphy.gif'},5000)
// }

// const imageclick = document.querySelector('body')
// imageclick.onload = imageClick