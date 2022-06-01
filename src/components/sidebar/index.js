import React from 'react';
import { SidebarContainer, Icon, CloseIcon } from './sidebarElements';

const SideBar = () => {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about">About</SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarLink to="discover">Discover</SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarLink to="services">Services</SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarLink to="signUp">Sign Up</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signIn">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
