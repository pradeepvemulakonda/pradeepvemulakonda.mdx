import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SelectedIcon from '@material-ui/icons/Remove';
import MailIcon from '@material-ui/icons/Mail';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { navigate } from 'gatsby';
import scrollToComponent from 'react-scroll-to-component';
import Item from './item';

class SideBarEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  activateLink = (link) => () => {
    navigate(
      link,
      { replace: false }
    );
  };



  buildChildren(node, selection) {
    return (
    <React.Fragment>
      <ListItem button onClick={node.items ? this.handleClick : this.activateLink(node.link)} key={node.title}>
        <ListItemText primary={node.title} />
        {node.items && (this.state.open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {
        node.items &&
        <List>
          {
            node.items.map((item, index) => (
                <Collapse in={this.state.open || selection.startsWith(node.name)} timeout='auto' unmountOnExit key={item.title}>
                  {item.items ? this.buildChildren(item, selection) : <Item item={item} selection={selection} />}
              </Collapse>
            ))
          }
        </List>
      }
      
    </React.Fragment>
    )
  }



  render() {
    const { edge, selection } = this.props;
    const node = edge.node;
    return (
      <List>
        <div>
          {
            this.buildChildren(node, selection)
          }
        </div>
      </List>
    );
  };
}

SideBarEntry.propTypes = {
  edge: PropTypes.any.isRequired
};

export default SideBarEntry;
