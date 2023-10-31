import styled from "styled-components"
import Header from "./Header";
import LeftSide from "./LeftSide";
import MainSide from "./MainSide";
import RightSide from "./RightSide";

const Home = (props) => {
    return (
        <>
      <Header />
<Container>
  <Section>
    <h5>
      <a>
        I am Hiring? 
      </a>
    </h5>
    <p>Find talented pros is record time Upwork and keep business moving</p>
  </Section>
  <Layout>
  <LeftSide />
  <MainSide />
  <RightSide />
  </Layout>
</Container>
      </>
    )
}

export default Home;

const Container = styled.div`
padding-top: 52px;
max-width: 100%;`
const Section = styled.section`
min-height: 50px;
padding: 16px 0;
box-sizing: content-box;
text-align: center;
text-decoration: underline;
display: flex;
justify-content: center;

h5 {
  color: #0a66c2;
  font-size: 14px;
  a {
    font-weight: 700;
  }
}

p {
  font-size: 14px;
  color: #434649;
  font-weight: 600;
}

@media (max-width: 768px) {
  flex-direction: column;
  padding: 0 5px;
}
`

const Layout = styled.div`
display: grid;
grid-template-areas: "leftside main rightside";
grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
column-gap: 25px;
row-gap: 25px;
/* grid-template-rows: auto; */
margin: 25px 0;
@media (max-width: 768px) {
   display: flex;
   flex-direction: column;
   padding: 0 5px;
}
`;
