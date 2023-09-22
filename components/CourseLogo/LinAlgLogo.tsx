import Image from "next/image";
import styled from "styled-components";
import { colors } from "lib/colors";

const Container = styled.div`
  display: flex;
  background-color: ${colors.linalg.lightGreen};
  color: white;
  width: 10rem;
  height: 14rem;
`;

const CopyContainer = styled.div`
  padding-right: 0.5rem;
`;

const CourseTitle = styled.h2`
  text-align: right;
  font-size: 1rem;
  margin-top: 2rem;
`;

const CourseAuthors = styled.h4`
  margin-top: 7rem;
  text-align: right;
  font-size: 0.44rem;
`;

const Sidebar = styled.div`
  display: flex;

  position: relative;
  overflow: hidden;
  min-width: 2rem;
  background-color: ${colors.linalg.darkGreen};
`;

const Curve = styled.div`
  position: absolute;
  left: 0.75rem;
  top: -12.5rem;
  background-color: ${colors.linalg.lightGreen};
  min-width: 1rem;
  border-radius: 100rem;
  height: 40rem;
  width: 40rem;
`;

const StudentLitteraturLogoContainer = styled.div`
  margin-top: auto;
  margin-left: 0.25rem;
  transform: rotate(-90deg) scale(1.25);
  transform-origin: left;
`;

const LinAlgLogo = () => {
  return (
    <Container>
      <Sidebar>
        <StudentLitteraturLogoContainer>
          <Image
            src="/images/studentlitteratur-logo.png"
            width={38}
            height={5}
          />
        </StudentLitteraturLogoContainer>
        <Curve />
      </Sidebar>

      <CopyContainer>
        <CourseTitle>Linjär Algebra</CourseTitle>
        <CourseAuthors>Jonas Månsson & Patrik Nordbeck</CourseAuthors>
      </CopyContainer>
    </Container>
  );
};

export default LinAlgLogo;
