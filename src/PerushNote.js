import React from 'react';

function trimNote(note){
    var pat = /\[[\d,]+\]/
    if(pat.test(note)) return note.substring(note.indexOf("]")+2);
    return note;
}

class PerushNote extends React.Component {
    render()
    {
        return (<p className="PerushNote">
                {trimNote(this.props.perushnote)}
                </p>);
    }
}

export default PerushNote;
