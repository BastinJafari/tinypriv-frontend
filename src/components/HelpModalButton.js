import React, { Component } from 'react';
import HelpModal from './HelpModal'
class HelpModalButton extends Component {

    state = {
        modalVisible: false
    }


    toggleVisbility = () => {
        this.setState(
            { modalVisible: !this.state.modalVisible }
        )
    }

    render() {
        return (
            <div>
                <button className="button--helpModal" onClick={this.toggleVisbility}>?</button>
                <HelpModal 
                    modalVisible={this.state.modalVisible}
                    toggleVisbility={this.toggleVisbility}
                    />
            </div>

        )
    }
}

export default HelpModalButton;
