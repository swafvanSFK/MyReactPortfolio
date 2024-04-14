import { Col, Container, Row } from "react-bootstrap";
import ProgressBar from "./ProgressBar";

const Skills = () => {

    const skills = [
        {
            label : 'HTML',
            value : 70
        },
        {
            label : 'CSS',
            value : 80
        },
        {
            label : 'JAVA SCRIPT',
            value : 60
        },
        {
            label : 'REACT',
            value : 50
        },
        {
            label : 'NODE JS',
            value : 75
        }

    ]

  return (
    <div>
      <Container>
        <Row>
          <Col>
          <h2 class="section-title">Skills</h2>
          {
            skills.map((item,index) => (
                <div className="mb-2 " key={index} >
                    <h6 className="text-start ">{item.label}</h6>
                    <ProgressBar item = {item}/>
                </div>
            ))
          }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
