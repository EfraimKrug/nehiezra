import React from 'react';

function trimNote(note){
    var pat = /\[[\d,]+\]/
    if(pat.test(note)) return note.substring(note.indexOf("]")+2);
    return note;
}

class PerushNote extends React.Component {
    render()
    {
        return (<div className="PerushNote">
                {trimNote(this.props.perushnote)}
                </div>);
    }
}

export default PerushNote;
