import { useState } from "react";
import "./ImageText.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "../../NavigationBar/NavigationBar";
import Footer from "../../Footer/Footer"
import Image from 'react-bootstrap/Image';

export default function ImageText(){
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedImage, setselectedImage] = useState(null);
  
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    const handleImageFile = (e) => {
      const file=e.target.files[0];
      if(file){
        const imgUrl= URL.createObjectURL(file);
        setselectedImage(imgUrl);
      }
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log("Selected Option:", selectedOption);
      console.log("Selected File:", selectedImage);
      // Reset form fields if needed
    };
    return(

        <>
        <NavigationBar/>
          <h2 className="titleheading">Image to Text</h2>
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
    
                  <Form.Group controlId="fileUpload" className="formgroup">
                    <Form.Label>
                      <h5>Upload File</h5>
                    </Form.Label>
                    <Form.Control type="file" accept="image/*" onChange={handleImageFile} />
                  </Form.Group>
                  <br/>

                  {selectedImage &&(
                    <div>
                      <h5>Image Preview</h5>
                      <Image src={selectedImage} alt="Image Preview" fluid/>
                    </div>
                  )}
                  <br/>
    
                  <Button variant="light" type="submit">
                    Convert
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