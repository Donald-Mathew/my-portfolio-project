import React from 'react';
import { DiDatabase, DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { FaChartLine } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
   <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the data analytics world
    </SectionText>
    <List>
      <ListItem>
         <FaChartLine size="3rem" />
        <ListContainer>
           <ListTitle>Data Visualization</ListTitle>
           <ListParagraph>
            Experience with <br />
               Power BI and Excel
           </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
           <ListTitle>Data Science</ListTitle>
           <ListParagraph>
            Experience with <br />
               Python and Machine Learning Libraries
           </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
           <ListTitle>Database querying</ListTitle>
           <ListParagraph>
            Experience with <br />
               SQL
           </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
   </Section>
);

export default Technologies;
