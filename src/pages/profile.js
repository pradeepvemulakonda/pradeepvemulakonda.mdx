import React from 'react'
import PrimaryLayout from '../layout/primary-layout';
import SEO from '../components/seo'
import Intro from 'components/intro';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MuiTheme } from '../theme/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import styled, { ThemeProvider } from 'styled-components';

const ExpansionPanelDetailsStyled = styled(ExpansionPanelDetails) `
    &:last-child {
      display: flex;
      flex-direction: column;
    }
`;

const Profile = () => (
  <ThemeProvider theme={MuiTheme}>
    <MuiThemeProvider theme={MuiTheme}>
      <PrimaryLayout title="Profile">
        <SEO
          title='Profile'
          keywords={[`profile`, `pradeep`, `vemulakonda`, `sydney`, `react`, `designer`, `architect`]}
        />
        <Intro></Intro>
        <div>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              About
          </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              I am a full-stack engineer whose passion lies in building great
              products while enabling others to perform their roles more effectively.
              Dived into the world of Artificial intelligence and machine learning.
              Understood that Machine learning is all about recognising and
              refining patterns and nothing artificial or wondrous about it.
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              Skills
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <ul>
                <li>
                  Python, Kerastase, Dl4j, Tensorflow and IBM Watson.
                </li>
                <li>
                  React, Redux, Styled components and NodeJs.
                </li>
                <li>
                  Swagger, REST, WADL, API.
                </li>
                <li>
                  Java, C# .Net, IBM BPM(lombardi), Kafka, Docker and Sql.
                </li>
                <li>
                  AWS: S3, Route 53, CloudFront, Lambda and RDS.
                </li>
                <li>
                  Retail Banking products: Persoanl Loans,Cards, Cards Servicing, Payments and Payments API.
                </li>
                <li>
                  Insuarnce: Underwriting, Claims, Policy and servicing (LOMA certified).
               </li>
                <li>
                  Health: Medication Management, Population Health, Electronic Health Records, Snomed-CT and FHIR.
                </li>
              </ul>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              Summary
            </ExpansionPanelSummary>
            <ExpansionPanelDetailsStyled>
              <p>15 years of experience in Banking, Insurance and Health domains.
              Designed complex systems spanning Origination Systems, Underwriting systems and a full stack digital applications.</p>

              <p>Interested in Designing, Architecture, UX and Machine Learning.</p>
            </ExpansionPanelDetailsStyled>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              Details
            </ExpansionPanelSummary>
            <ExpansionPanelDetailsStyled>
              <div>Bhaskara Pradeep Vemulakonda</div>
              <div>Senior Solutions Designer</div>
              <div>Westpac</div>
              <div>Sydney, Australia</div>
              <div>
                <span><a href="https://www.vemulakonda.com">Website</a></span>
                <span> | </span>
                <span><a href="https://github.com/pradeepvemulakonda">GitHub</a></span>
              </div>
            </ExpansionPanelDetailsStyled>
          </ExpansionPanel>
        </div>
      </PrimaryLayout>
    </MuiThemeProvider>
  </ThemeProvider>
)

export default Profile;
