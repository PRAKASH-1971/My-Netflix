import React from 'react'
import Row from './Row';
import requests from './request';

function App() {
    return (
        <div>
            <h1>Netflix</h1>
            <Row title={<b>NETFLIX ORIGINALS</b>} fetchUrl={requests.fetchNetflixOriginals} 
            isLargeRow={true}
             />
            <Row title={<b>Trending Now</b>} fetchUrl={requests.fetchTrending}/> 
            <Row title={<b>Top Rated</b>} fetchUrl={requests.fetchTopRated}/> 
            <Row title={<b>Action Movies</b>} fetchUrl={requests.fetchActionMovies}/> 
            <Row title={<b>Comedy Movies</b>} fetchUrl={requests.fetchComedyMovies}/> 
            <Row title={<b>Horror Movies</b>} fetchUrl={requests.fetchHorrorMovies}/> 
            <Row title={<b>Romance Movies</b>} fetchUrl={requests.fetchRomanceMovies}/> 
            <Row title={<b>Documentaries</b>} fetchUrl={requests.fetchDocumentaries}/> 
        </div>
    );
}

export default App;