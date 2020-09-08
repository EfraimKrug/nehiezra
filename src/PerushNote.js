import React from 'react';

function trimNote(note){
    var pat = /\[[\d,]+\]/
    if(pat.test(note)) return note.substring(note.indexOf("]")+2);
    return note;
}

class PerushNote extends React.Component {
    render()
    {
        if (this.props.perushnote.indexOf("Notice") > -1)
          return (<p className="PerushNoteHighLight">
                  {trimNote(this.props.perushnote)}
                  </p>);

        return (<p className="PerushNote">
                {trimNote(this.props.perushnote)}
                </p>);
    }
}

export default PerushNote;
