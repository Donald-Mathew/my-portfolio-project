import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'More than 5 data visualization projects'},
  { number: 5, text: 'More than 5 data science projects', },
  { number: 1, text: 'A Space-X front-end clone', },

];

const Acomplishments = () => (
  <Section>
     <SectionTitle>
       Personal Accomplishments
     </SectionTitle>
     <Boxes>
        {data.map((card,index) => (
           <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>
            {card.text}
          </BoxText>
           </Box>
        ))}
     </Boxes>
  </Section>
);

export default Acomplishments;
