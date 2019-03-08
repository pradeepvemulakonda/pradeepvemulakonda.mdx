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
    }

    render() {
        const { item, selection} = this.props
        return (
         <React.Fragment >
            <ListItem button component='a' name={item.link} ref={
                nodeRef => {
                    if (selection === item.link) {
                        scrollToComponent(nodeRef, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
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
            </ListItem>
        </React.Fragment>);
    }

}