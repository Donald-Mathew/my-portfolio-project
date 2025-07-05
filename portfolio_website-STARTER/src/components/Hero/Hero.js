import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
      <LeftSection>
         <SectionTitle main center style={{ color: 'color: rgba(255, 255, 255, 0.75)' }}>
            Welcome To <br />
            My Personal Portfolio
         </SectionTitle>
         <SectionText>
            My Purpose is to help people or Companies derive insights out of their Data
         </SectionText>
         <Button  onClick = {() =>window.location = "https://github.com/Donald-Mathew" }>Explore More</Button>
      </LeftSection>
    </Section>
);

export default Hero;