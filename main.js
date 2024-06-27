function changeVideo(){
  const html = document.documentElement
  var video = document.getElementById('video-background');

  
  if(html.classList.contains('light')){
  html.classList.remove('light')
    video.src = "/video-dark.mp4";
  } else{ 
    html.classList.add('light')
    video.src = "/video-light.mp4"
  }
}