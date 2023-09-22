import { FC, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { routes } from "lib/routes";
import { colors } from "lib/colors";
import BurgerMenuStylesProvider from "layout/BurgerMenuStylesProvider";
import { TABLET_BP } from "lib/breakpoints";
import { Course } from "lib/types";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
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
    &:before {
      background-color: ${colors.middleGrey};
    }
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
  padding: 1rem 2rem;
  position: fixed;
  left: -1rem;
  top: 0;
  width: 100%;
  background-color: ${colors.råsa};
  z-index: 10;
  box-shadow: 0 8px 6px -6px black;
  ${TABLET_BP} {
    display: none;
  }
`;

const menus = {
  endimB1: {
    title: "Endim B1",
    items: [
      {
        label: "Alla kurser",
        route: routes.home,
      },
      {
        label: "Hem",
        route: routes.endimB1.home,
      },
      {
        label: "Länkar",
        route: routes.endimB1.links,
      },
      {
        label: "Instuderingsfrågor",
        route: routes.endimB1.rehearsal,
      },
      {
        label: "Extentor",
        route: routes.endimB1.extentor.home,
      },
      {
        label: "Ny lösning",
        route: routes.endimB1.newSolution,
      },
    ],
  },
  endimB2: {
    title: "Endim B2",
    items: [
      {
        label: "Alla kurser",
        route: routes.home,
      },
      {
        label: "Hem",
        route: routes.endimB2.home,
      },
      {
        label: "Uppgifter i boken",
        route: routes.endimB2.bookSolutions.home,
      },
      {
        label: "Ny lösning",
        route: routes.endimB2.newSolution,
      },
    ],
  },
  linalg: {
    title: "Linalg",
    items: [
      {
        label: "Alla kurser",
        route: routes.home,
      },
      {
        label: "Hem",
        route: routes.linalg.home,
      },
      /* {
        label: "Länkar",
        route: routes.endimB1.links,
      },
      {
        label: "Instuderingsfrågor",
        route: routes.endimB1.rehearsal,
      },
      {
        label: "Extentor",
        route: routes.endimB1.extentor.home,
      },
      {
        label: "Ny lösning",
        route: routes.endimB1.newSolution,
      }, */
    ],
  }
};

type Props = {
  course: Course;
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
