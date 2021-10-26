import { FC, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import { routes } from 'lib/routes';
import { colors } from 'lib/colors';
import BurgerMenuStylesProvider from 'layout/BurgerMenuStylesProvider';
import { TABLET_BP } from 'lib/breakpoints';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  max-width: 100vw;
  padding: 0.5rem;
  padding-top: 6rem;
  ${TABLET_BP} {
    padding-top: 0;
    padding-left: 20.75rem;
    padding-right: 2rem;
  }
`;

const MenuItem = styled.div`
  margin-bottom: 1rem;
  font-size: 1.8rem;
  a {
    color: ${colors.almond};
    text-decoration: none;
  }
  :hover {
    a {
      color: ${colors.middleGrey};
    }
  }
`;

const MobileMenu = styled.div`
  ${TABLET_BP} {
    display: none;
  }
`;

const DesktopMenu = styled.div`
  display: none;
  ${TABLET_BP} {
    display: block;
  }
`;

const TopBar = styled.div`
  padding: 1rem;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: ${colors.magnolia};
  border-bottom: 1px solid ${colors.blackCoffee};
  z-index: 10;
  ${TABLET_BP} {
    display: none;
  }
`;

const Layout: FC = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
      <TopBar>
        <Link href={routes.home}>
          <h2>Endimensionell Analys</h2>
        </Link>
      </TopBar>
      <MobileMenu>
        <BurgerMenuStylesProvider>
          <Menu
            right
            onStateChange={(state) => setMenuOpen(state.isOpen)}
            isOpen={menuOpen}
          >
            <MenuItem id='endim' onClick={() => setMenuOpen(false)}>
              <Link href={routes.endim.home}>Hem</Link>
            </MenuItem>
            <MenuItem id='links' onClick={() => setMenuOpen(false)}>
              <Link href={routes.endim.links}>Länkar</Link>
            </MenuItem>
            <MenuItem id='rehearsal' onClick={() => setMenuOpen(false)}>
              <Link href={routes.endim.rehearsal}>Instuderingsfrågor</Link>
            </MenuItem>
          </Menu>
        </BurgerMenuStylesProvider>
      </MobileMenu>
      <DesktopMenu>
        <BurgerMenuStylesProvider>
          <Menu isOpen={true} noOverlay disableCloseOnEsc noTransition>
            <MenuItem id='endim' onClick={() => setMenuOpen(false)}>
              <Link href={routes.endim.home}>Hem</Link>
            </MenuItem>
            <MenuItem id='links' onClick={() => setMenuOpen(false)}>
              <Link href={routes.endim.links}>Länkar</Link>
            </MenuItem>
            <MenuItem id='rehearsal' onClick={() => setMenuOpen(false)}>
              <Link href={routes.endim.rehearsal}>Instuderingsfrågor</Link>
            </MenuItem>
          </Menu>
        </BurgerMenuStylesProvider>
      </DesktopMenu>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
