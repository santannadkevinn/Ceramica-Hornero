

videos = ['videos/video2.mp4', 'videos/video3.mp4', 'videos/video4.mp4', 'videos/video5.mp4','videos/video6.mp4', 'videos/video1.mp4']
list = []
clicks = 0
function changeVideo(){
    document. getElementById('url').src = `${videos[clicks]}`
    if(clicks == 5){
        clicks = 0
        
    }
    if(clicks == 5){
         document.getElementById('logo').src = 'imagens/redonda-logo-png.png' 
    }
    clicks++
}

