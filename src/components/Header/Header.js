import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
     <Div1>
      <Link href = "/">
         <a style={{display: "flex", alignItems:"center",color: "white", marginBottom: "20px" }}>
             <DiCssdeck  size="3rem"/> <Span>Portfolio</Span>
         </a>
      </Link>
     </Div1>
     <Div2>
       <li>
         <Link href = "#projects">
            <NavLink>
               Projects
            </NavLink>
         </Link>
       </li>
       <li>
         <Link href = "#tech">
            <NavLink>
               Technologies
            </NavLink>
         </Link>
       </li>
       <li>
         <Link href = "#about">
            <NavLink>
               About
            </NavLink>
         </Link>
       </li>
     </Div2>
     <Div3>
      <SocialIcons href="https://github.com/Donald-Mathew">
        <AiFillGithub size= "3rem" />
      </SocialIcons>
      {/* <a
  href="https://linkedin.com/in/donald-mathew-374494202"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: "white", padding: "8px", borderRadius: "50px", display: "inline-block", transition: "0.3s ease" }}
>
  <AiFillLinkedin size="3rem" />
</a> */}

      {/* <SocialIcons href="https://instagram.com">
        <AiFillInstagram size= "3rem" />
      </SocialIcons> */}
     </Div3>
  </Container>
);

export default Header;
