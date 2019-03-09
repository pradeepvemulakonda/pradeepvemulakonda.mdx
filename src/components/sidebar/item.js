import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { navigate } from 'gatsby';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.currentNode = React.createRef();
    }

    componentDidMount() {
        const { item, selection } = this.props;
        if (selection === item.link) {
            this.currentNode.current.scrollIntoView(false);
        }
    }

    render() {
        const { item, selection } = this.props
        return (
            <div>
                <ListItem button component='a' name={item.link}
                    onClick={() => {
                        navigate(
                            item.link,
                            { replace: false }
                        );
                    }
                    }
                    selected={selection === item.link}
                >
                    <ListItemText primary={item.title} />
                </ListItem>
                <div ref={this.currentNode} tabIndex={-1}></div>
            </div>);
    }

}