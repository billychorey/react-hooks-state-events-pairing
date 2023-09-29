import video from "../data/video.js";
import Video from "./Video.js";
import Textcontent from "./Textcontent";
import Buttoncontainer from "./Buttoncontainer";
import CommentsContainer from "./CommentsContainer";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video}/>
      <Textcontent video={video} />
      <Buttoncontainer video={video} />
      <CommentsContainer video={video}/>
    </div>
  );
}

export default App;
