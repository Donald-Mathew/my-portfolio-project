import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> Call </LinkTitle>
           <LinkItem href="tel:111-111-111">0108983208</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
           <LinkItem href="mailto:donaldmathew27@gmail.com">donaldmathew27@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Data Is The Real Deal</Slogan>
        </CompanyContainer>

        <SocialContainer>
        <SocialIcons href="https://github.com">
                <AiFillGithub size= "3rem" />
              </SocialIcons>
              <SocialIcons href="https://www.linkedin.com/in/donald-mathew-374494202"
                target="_blank"
                 rel="noopener noreferrer">
                <AiFillLinkedin size= "3rem" />
              </SocialIcons>
              {/* <SocialIcons href="https://instagram.com">
                <AiFillInstagram size= "3rem" />
              </SocialIcons> */}
              </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
