import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();
//<RoomContext.Provider value={}
export default class RoomProvider extends Component {
    state={
       rooms: [],
       sortedRooms: [],
       featuredRooms:[],
       loading: true
    };
    //getData

    componentDidMount(){
        let rooms = this.formatData(items)
    }    



    render() {
        return (
           <RoomContext.Provider value={{...this.state}}>
               {this.props.children}
           </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export{RoomProvider, RoomConsumer, RoomContext};