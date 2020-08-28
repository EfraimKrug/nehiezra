import React from 'react';
import PerushAuthor from './PerushAuthor.js';
import PerushNote from './PerushNote.js';

class PerushNotes extends React.Component {
    // console.log(this);
    render()
    {
        // console.log(this.props.perushNotes);
        return (<div className="PerushNote" >
                {this.props.perushNotes.map(function(perush,index){
                        return (<div className="PerushNote" key={index}><PerushAuthor author={perush.author} sefer={perush.othersefer}/><PerushNote perushnote={perush.note}/></div>)})}
                </div>);
    }
}

export default PerushNotes;
