import './App.css';
import Row from './Row';
import requests from './Request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />

      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargrRow
        // automa true wenawa eka danna one
        />
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romantic Movies" fetchUrl={requests.fetchRomanticMovies}/>
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentries}/>
      
    </div>  
  );
}

export default App;
