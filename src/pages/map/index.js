import React from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

class Map extends React.Component {
    state = {
      defaultCenter: {
        lat: 39.7643389,
        lng: -104.8551114,
      },
      markers: [
        {
            lat: 39.7643389,
            lng: -104.8551114,
        }
    ],
    };

  componentDidMount() {
    document.body.classList.add("is-map");
    this.handleAttachGoogleMap();
  }

  componentWillUnmount() {
    document.body.classList.remove("is-map");
  }
  handleAttachGoogleMap = () => {
    const { defaultCenter } = this.state;
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: defaultCenter,
      zoom: 11,
    });
    setTimeout(() => {
        this.handleDrawMarkers();
      }, 2000);
  };
  handleDrawMarkers = () => {
    const { markers } = this.state;
    markers.forEach((marker) => {
      new google.maps.Marker({
        position: marker,
        map: this.map,
      });
    });
  };

  render() {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="google-map" />
                </div>
                <div className="col">
                <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/100/00000/ffffff" />
      <Card.Body>
        <Card.Title>Home Depot</Card.Title>
        <Card.Text>
            Store Location Ect
        </Card.Text>
        <Button variant="primary">Directions</Button>
      </Card.Body>
    </Card>
                </div>
            </div>
        </div>
            
        </>
    );
  }
}

Map.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Map;