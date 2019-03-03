import React from 'react';
import { rhythm } from '../utils/typography';
import TutorialHeader from '../components/header/header-tutorial';
import FooterBar from '../components/footer/footer';
import { ThemeProvider } from 'styled-components';
import { MuiTheme } from '../theme/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { StaticQuery, graphql } from 'gatsby';
import SideBar from '../components/sidebar/sidebar';
import PropTypes from 'prop-types';

// let mql;

// if (typeof window !== 'undefined') {
//   mql = window.matchMedia(`(min-width: 800px)`);
// }

class TutorialLayout extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      top: false
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render () {
    const { children } = this.props;
    return (<StaticQuery
      query={graphql`
        query TutorialHeaderQuery {
          allTutorialDrawerYaml {
            edges {
              node {
                id
                link
                ui
                title
                items {
                  title
                  link
                }
              }
            }
          }
        }
    `}
      render={data => {
        return (
          <ThemeProvider theme={MuiTheme}>
            <MuiThemeProvider theme={MuiTheme}>
              <div>
                <TutorialHeader handleClick={() => this.toggleDrawer('left', true)} />
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}
                  variant='temporary'>
                  <SideBar edges={data.allTutorialDrawerYaml.edges} />
                </Drawer>
                <div
                  style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    marginTop: rhythm(1),
                    marginBottom: rhythm(1),
                    maxWidth: rhythm(24),
                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
                  }}
                >
                  <main>{children}</main>
                </div>
                <FooterBar show={!this.state.sidebarDocked} handleClick={this.onSetSidebarOpen} />
              </div>
            </MuiThemeProvider>
          </ThemeProvider>
        );
      }
      }
    />);
  };
}

TutorialLayout.propTypes = {
  children: PropTypes.any.isRequired
};

export default TutorialLayout;
