import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SelectedIcon from '@material-ui/icons/Remove';
import { navigate } from 'gatsby';
import scrollToComponent from 'react-scroll-to-component';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.currentNode = null;
    }

    componentDidMount() {
        console.log(this.currentNode);
        scrollToComponent(this.currentNode);
    }

    render() {
        const { item, selection} = this.props
        return (
            <ListItem button component='a' name={item.link} ref={
                nodeRef => {
                    if (selection === item.link) {
                        this.currentNode = nodeRef;
                    }
                }
            }
                onClick={() => {
                    navigate(
                        item.link,
                        { replace: false }
                    );
                }
                }
            >
                <ListItemIcon>{this.props.selection === item.link ? <SelectedIcon /> : <p></p>}</ListItemIcon>
                <ListItemText primary={item.title} />
            </ListItem>);
    }

}