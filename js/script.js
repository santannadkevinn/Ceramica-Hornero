

videos = ['videos/video2.mp4', 'videos/video3.mp4', 'videos/video4.mp4', 'videos/video5.mp4','videos/video6.mp4', 'videos/video1.mp4']
list = []
clicks = 0
function changeVideo(){
    document. getElementById('url').src = `${videos[clicks]}`
    if(clicks == 5){
        clicks = 0
    }
    clicks++
    let logo = document.getElementById('logo')
    let logoImg = ['imagens/logo-click-aqui.png', 'imagens/redonda-logo-png.png']
    logo.src = logoImg[0]
}


//change logo
var currentTime = new Date().getMinutes();

if (44 <= currentTime && currentTime < 45){
    
}else if (46 <= currentTime && currentTime < 47){
    logo.src = logoImg[1]
}

