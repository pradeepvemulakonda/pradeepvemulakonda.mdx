import React from 'react';
import { rhythm } from '../utils/typography';
import NavigationHeader from '../components/header/header';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiTheme } from '../theme/theme';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { StaticQuery, graphql } from 'gatsby';
import SideBar from '../components/sidebar/sidebar';

class PrimaryLayout extends React.Component {
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
        query HeaderQuery {
          allMainDrawerYaml {
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
                <NavigationHeader handleClick={() => this.toggleDrawer('left', true)} />
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}
                  variant='temporary'>
                  <SideBar edges={data.allMainDrawerYaml.edges} />
                </Drawer>
                <div
                  style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    maxWidth: rhythm(24),
                    padding: `${rhythm(1 / 3)} ${rhythm(1 / 4)}`
                  }}
                >
                  <main>{children}</main>
                </div>
                <footer>
                  © {new Date().getFullYear()}, Pradeep Vemulakonda
                </footer>
              </div>
            </MuiThemeProvider>
          </ThemeProvider>
        );
      }
      }
    />);
  };
}

PrimaryLayout.propTypes = {
  children: PropTypes.any.isRequired
};

export default PrimaryLayout;
