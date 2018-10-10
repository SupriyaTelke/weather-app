import React from 'react';
import { Card, CardActions, CardText, Button, CardTitle, CardMenu} from 'react-mdl';


export class Weather extends React.Component {
    state = {
        isCelcius:true
    }

    toggelTemp = (e) => {
        this.setState({isCelcius: !this.state.isCelcius});
        this.changeTemp();
    };

    changeTemp = () =>{
        console.log(this.state.isCelcius);
        (this.state.isCelcius) ? this.props.toFahrenheit() : this.props.toCelcius();
    }

    render(){
        return(
            <div className="weather-info">
                {this.props.error ? <p className="weather__error">{this.props.error}</p>
                    :
                    this.props.city && this.props.temperature &&
                    <div className="weather-grid">
                        <Card shadow={5} style={{width:"700px" ,height:"400px" , background:"url(https://hdwallpaperim.com/wp-content/uploads/2017/08/24/103834-simple_background-748x421.jpg) center / cover"}}>
                            <CardTitle  style={{color:'#fff', height:"100px"}}>
                                <span className="weather__value">  {this.props.city}, {this.props.country}</span>
                            </CardTitle>
                            <CardText style={{color:'#fff', height:"100px"}}>
                                <p>  {this.props.description.charAt(0).toUpperCase() + this.props.description.slice(1)} </p>
                                <h1 style={{textAlign:"center" ,fontSize:"45px"}}>  {this.props.temperature}&deg;</h1>
                            </CardText>
                            <CardActions border style={{color:'#fff', height:"200px", textAlign:"right", paddingRight:"2em"}}>
                                Humidity:<span className="weather__value">  {this.props.humidity}</span>%<br/>
                                Min Temperature:<span className="weather__value">  {this.props.minTemp}</span>&deg;<br/>
                                Max Temperature:<span className="weather__value">  {this.props.maxTemp}</span>&deg;<br/>
                                Wind Speed:<span className="weather__value">  {this.props.wind}</span>m/s<br/>
                            </CardActions>
                            <CardMenu style={{color: "#fff"}}>
                                <div onClick={this.toggelTemp}> 
                                    {this.state.isCelcius
                                    ?  <Button raised colored ripple>&deg;F</Button>
                                    : <Button raised accent ripple >&deg;C</Button>}
                                </div>
                            </CardMenu>
                        </Card>
                    </div>
                }
            </div>
        )
    }
}
export default Weather;