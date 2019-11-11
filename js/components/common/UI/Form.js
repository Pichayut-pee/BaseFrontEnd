import React, {Component} from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        const children = React.Children.map(this.props.children, child => {

            if(child.type.name === 'BaseButton') {

                return React.cloneElement(child, {
                    ...child.props,
                })
            } else if (child.type.name === 'NumberField'){
                return React.cloneElement(child, {
                    ...child.props,
                })
            } else if (child.type.name === 'BaseField'){
                return React.cloneElement(child, {
                    ...child.props,
                })
            } else if (child.type.name === 'DatePicker'){
                return React.cloneElement(child, {
                    ...child.props,
                })
            }


        })

        return (
            <div>{children}</div>
        );
    }

}
export default Form

