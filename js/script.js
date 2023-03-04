/*onclick="changeVideo()

videos = ['videos/video2.mp4', 'videos/video3.mp4', 'videos/video4.mp4', 'videos/video5.mp4','videos/video6.mp4', 'videos/video1.mp4']
list = []
clicks = 0
function changeVideo(){
    document. getElementById('url').src = `${videos[clicks]}`
    if(clicks == 5){
        clicks = 0
        
    }
    clicks++
}
*/
count = 0
function changeAll() {
    let article = document.querySelector('section')
    if(count % 2 == 0){
        document. getElementById('url').style.display = 'none'
        const body = document.querySelector('body')
        body.style.backgroundColor = 'white'
        article.style.display = 'block'
    }
    if(count % 2 == 1){
        document. getElementById('url').style.display = 'block'
        article.style.display = 'none'
        
    }
    count++
}

const change = document.querySelector('[change-all]')
change.onclick = changeAll

