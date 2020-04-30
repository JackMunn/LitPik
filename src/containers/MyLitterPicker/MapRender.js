import React, {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';

import mapboxgl from 'mapbox-gl';
import './site.css';
import * as geojson from './spoofdata.json';
import Footer from '../../components/MyLitterPicker/Footer';
import SuccessModal from '../../components/MyLitterPicker/OnSuccess';
import Backdrop from '../../components/UI/Backdrop';
import Loader from '../../components/UI/Loader';
import axios from 'axios';
import { connect } from 'react-redux';
import * as mapRenderActions from '../../store/actions/index';



  
const MapRender = (props) => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiamFja211bm4iLCJhIjoiY2s4ZGVlaXdvMHYzajNqbHZlZ3F4cnIxNyJ9.qVRzBiJqtLPl6GuXYrCJLQ';

 let mapContainer;
 let map;

  const [isLoading, setIsLoading] = useState(true);
  const [newPostSuccess, setNewPostSuccess] = useState(false);
  const [lastRubbishType, setLastRubbishType] = useState(null);

  const [serverToggle, setServerToggle] = useState('locs.json')

  

  useEffect(() => {
     // creates the new map when the page loads
    map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
      center: [props.lng, props.lat],
      zoom: 15,
      attributionControl: false
      });
    
    // adds the "find my location" nav buttons
    map.addControl(new mapboxgl.NavigationControl());

    // adds the geolocation controls
    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true,
      // showAccuracyCircle: true,  
      }));

    renderMarkers();
    // setTimeout(() => setIsLoading(false), 5000)
  
  }, []);


  const renderMarkers = (props) => {
    axios.get(`https://litterapp-21386.firebaseio.com/${serverToggle}`).then(response => {
      for(let key in response.data){
           // create a HTML element for each feature
           var el = document.createElement('div');
           el.className = 'marker';
           // make a marker for each feature and add to the map [lng, lat]
           new mapboxgl.Marker(el)
             .setLngLat([response.data[key].longitude, response.data[key].latitude])
             .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
             .setHTML('<h3>' + response.data[key].rubbishType + '</h3>'))
             .addTo(map);
     }
     setIsLoading(false);
     }).catch(error => {console.log('render new set of markers failed', error.message)});
  }

  const saveLitterLoc = (rubbishType) => {
    setIsLoading(true);
    props.onSessionAdd();

    navigator.geolocation.getCurrentPosition(PositionFound);
    function PositionFound(position) {
      

        const littleLoc = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          rubbishType: rubbishType,
          date: new Date(),
        }
  
        axios.post(`https://litterapp-21386.firebaseio.com/${serverToggle}`, littleLoc )
          .then(response => {
            console.log('Succesful post to server.',response)

            // var el = document.createElement('div');
            // el.className = 'marker';
            // // make a marker for each feature and add to the map [lng, lat]
            // new mapboxgl.Marker(el)
            //   .setLngLat([littleLoc.longitude, littleLoc.latitude])
            //   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            //   .setHTML('<h3>' + littleLoc.rubbishType + '</h3>'))
            //   .addTo(map);
            setIsLoading(false);
            setNewPostSuccess(true);
            setLastRubbishType(littleLoc.rubbishType)
            navigator.vibrate([250,250,250]);

            


          })
          .catch(error => console.log('your post method to Firebase failed',error.message));
    }

  }

  const toggleSuccessScreen = () => {
    console.log('success screen fired')
    setNewPostSuccess(false);
  }

let loadScreen;
if(isLoading){
  loadScreen = (
    <>
      <Backdrop/>
      <Loader/>
    </>) ;
}

let successScreen;
if(newPostSuccess){
  successScreen = (
    <>
    <Backdrop toggleSidedraw={toggleSuccessScreen}/>
    <SuccessModal rubbishType={lastRubbishType} toggleSuccessScreen={toggleSuccessScreen}/>
    </>
  );
}



    return (
      <>
        <div ref={el => mapContainer = el} className="mapContainer">
        {loadScreen}  
        {successScreen}    
        <Route exact path="/map" component={()=> <Footer saveLitterLoc={saveLitterLoc}/>}/> 

        </div>  

      </>
      )

  }


const mapStateToProps = (state) => {
  return {   
    lng: state.mapReducer.lng,
    lat: state.mapReducer.lat,

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSessionAdd: () => dispatch(mapRenderActions.onSessionAdd()),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MapRender); 