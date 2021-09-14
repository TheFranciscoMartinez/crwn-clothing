import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collectionPreview/collection.preview.comp";


class shopPage extends Component{ 
    constructor(props){ 
        super(props) 

            this.state = { 
                Collections: SHOP_DATA
            };   
    }

    render() {
        const {Collections} = this.state;

        return (<div className= 'shop page'>
            {
                Collections.map(({id, ...otherCollectionsProps}) => (
                    <CollectionPreview key={id} {...otherCollectionsProps} />
                ))
            }
        
        </div>);
    }
}
export default shopPage