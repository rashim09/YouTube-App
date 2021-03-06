import React, {Component} from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetails';

class App extends Component{
  state={
    videos:[],
    selectedVideo: ''
  }
    componentDidMount(){
        this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
    const KEY = 'AIzaSyBc7mC2nWDwrVf93zb6iVgrsTE5xSofTvs';
    const response = await youtube.get('/search' , {
      params:{
        q: term, // q is the query parameter refer youtube search api onn google it rquires q for search term
        part:'snippet',
        maxResults: 5,
        type: 'video',
        key:KEY
    }
    });
    console.log(response)
      this.setState({
        videos:response.data.items,
        selectedVideo:response.data.items[0]
      });
  }

  onVideoSelect=(video)=>{
    console.log('from video',video);
    this.setState({selectedVideo:video})
  }

  render(){
    return(
    <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
        <div className="ui row">
        <div className="eleven wide column">
          <VideoDetail video={this.state.selectedVideo}/>
        </div>
        <div className="five wide column">
          <VideoList 
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}/>
        </div>
        
        </div>
        </div>
      
    </div>
    );
  }
}
export default App;