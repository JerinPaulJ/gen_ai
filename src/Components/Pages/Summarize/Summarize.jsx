import { useState } from "react";
import "./Summarize.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "../../NavigationBar/NavigationBar";
import Footer from "../../Footer/Footer"
export default function Summarize(){
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedChainType, setSelectChainType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  
  const handleOptionChainType = (e) => {
    setSelectChainType(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Selected Option:", selectedOption);
    console.log("Selected File:", selectedFile);
    // Reset form fields if needed
  };
    return(
      <>
    <NavigationBar/>
      <h2 className="titleheading">Summarize</h2>
      <br/>
      <Container className="maincontainer">
        <Row className="rowcontainer">
          <Col  xs={12} md={5}  className="containerBox1  "  >
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="selectOption" className="formgroup">
                <Form.Label>
                  <h5>Select a Language Model</h5>
                </Form.Label>
                <Form.Select
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="">Choose a model</option>
                  <option value="option1">Azure OpenAI</option>
                  <option value="option2">Google Palm</option>
                  <option value="option3">Google Gemini Pro</option>
                  <option value="option2">LIama2</option>
                </Form.Select>
              </Form.Group>
              <br/>


              <Form.Group controlId="selectOption" className="formgroup">
                <Form.Label>
                  <h5>Select a Chain Model</h5>
                </Form.Label>
                <Form.Select
                  value={selectedChainType}
                  onChange={handleOptionChainType}
                >
                  <option value="">Choose chain type</option>
                  <option value="option1">Auto</option>
                  <option value="option1">Stuff</option>
                  <option value="option1">Map Reduce</option>
                  <option value="option1">Refine</option>
                </Form.Select>
              </Form.Group>
              <br/>

              <Form.Group controlId="fileUpload" className="formgroup">
                <Form.Label>
                  <h5>Upload File</h5>
                </Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
              </Form.Group>
              <br/>
              <br/>

              <Button variant="light" type="submit">
                Upload
              </Button> 
            </Form>
          </Col>
          
        
          <Col xs={12} md={6} className="containerBox2"  >
          <h4>Output</h4>
          <br/>
          <h5>Select a model and upload the file. Your output will be displayed here... </h5>
         
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
    )
}