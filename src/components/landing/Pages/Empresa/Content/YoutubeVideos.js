
export default function YoutubeVideos () {
    return(
      <div className="videos">
          <div className="video">
            <iframe width="450" height="300" src="https://www.youtube.com/embed/L7c4wS7T_T8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IF5eg1xYOZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GYTq3Tv1bHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
      </div>  
    );
}