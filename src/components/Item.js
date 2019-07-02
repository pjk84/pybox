import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Item extends Component {

    getStyle = () => {
        return {
            borderRadius: '4px',
            height: '2em',
            width: '150px',
            margin: '1px',
            border: '1px solid',
            backgroundColor: this.props.itemProps.completed ? 'white' : '#FFE2D8',
            borderColor: this.props.itemProps.completed ? '#B2B2B2' : '#FF2E00',
        }
    }


    render() {
        const { id, fieldName, fieldType} = this.props.itemProps
        
        if (fieldType == 'textfield'){
            return (
                <div>
                    
                    <input style= { this.getStyle()} value = {this.inputValue} placeholder={fieldName} onChange={ this.props.completeField.bind(this, id) } />

                </div>
                
            )
        }
        else {
            return (
                
                <div>
                    <select style= { this.getStyle() } onChange={ this.props.completeField.bind(this, id) }>
                        <option value=""></option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                    </select> 
                </div>
                
            )
        }
    }
}

//propTypes
Item.propTypes = {
    itemProps: PropTypes.object.isRequired
  }

export default Item
