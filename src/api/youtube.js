import axios from 'axios';

const KEY = 'AIzaSyB0OvMs_k1jlmw2R-PWTwll2ka8cyy-ktc';

export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    maxResults: 5,
    key:KEY
}
});