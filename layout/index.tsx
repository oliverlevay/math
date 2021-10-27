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
    padding-left: 20rem;
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
    position: fixed;
    background-color: ${colors.blackCoffee};
    padding: 2.5rem 1.5rem 0px;
    font-size: 1.15rem;
    height: 100%;
    z-index: 10;
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

const menus = {
  endimB1: {
    title: 'Endimensionell Analys',
    items: [
      {
        label: 'Hem',
        route: routes.home,
      },
      {
        label: 'Endim B1',
        route: routes.endim.home,
      },
      {
        label: 'Länkar',
        route: routes.endim.links,
      },
      {
        label: 'Instuderingsfrågor',
        route: routes.endim.rehearsal,
      },
      {
        label: 'Ny lösning',
        route: routes.endim.newSolution,
      },
    ],
  },
};

type Props = {
  course: 'endimB1';
};

const Layout: FC<Props> = ({ children, course }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = menus[course];
  const MenuItems: FC = () => {
    return (
      <>
        {menu.items.map((item) => (
          <MenuItem
            id={item.route}
            onClick={() => setMenuOpen(false)}
            key={item.label}
          >
            <Link href={item.route}>{item.label}</Link>
          </MenuItem>
        ))}
      </>
    );
  };

  return (
    <Container>
      <TopBar>
        <h2>{menu.title}</h2>
      </TopBar>
      <MobileMenu>
        <BurgerMenuStylesProvider>
          <Menu
            right
            onStateChange={(state) => setMenuOpen(state.isOpen)}
            isOpen={menuOpen}
          >
            <MenuItems />
          </Menu>
        </BurgerMenuStylesProvider>
      </MobileMenu>
      <DesktopMenu>
        <MenuItems />
      </DesktopMenu>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
