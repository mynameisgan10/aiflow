import React, { Component } from 'react';
import App from '../../../components/app/app';

class Apps extends Component {
    
    render() {
        console.log(this.props);
        const testValue = [
            "https://images.unsplash.com/photo-1500252124339-44ed473934dd?auto=format&fit=crop&w=3150&q=80",
            "https://images.unsplash.com/photo-1501951653466-8df816debe46?auto=format&fit=crop&w=1315&q=80",
            "https://ping.design/wp-content/uploads/2016/09/20160929-Free-Logos-2.jpg",
            "https://www.graphicsprings.com/filestorage/stencils/eeeb4d12083e269d5d0a09acd8720834.svg",
            "https://about.canva.com/wp-content/uploads/sites/3/2016/08/Home-Furnishings-Logo.png",
            "https://img.etsystatic.com/il/90ac59/754909622/il_570xN.754909622_nwec.jpg",
            "http://en3yksrguy-flywheel.netdna-ssl.com/wp-content/uploads/Maaemo-Logo-by-Uniform-BPO.jpg"
        ]; //pull apps from server
        const output = testValue.map(value => {
            return (
                <div className="column is-3">
                    <App onClick={this.props.click} appImage={value}/>
                </div>
            )
        });
        return (
            <div className="columns is-multiline">
                {output}
                <div className="column is-3">
                    <h1 className="has-text-danger title">Add more</h1>
                </div>
            </div>
        );
    }
}

export default Apps;