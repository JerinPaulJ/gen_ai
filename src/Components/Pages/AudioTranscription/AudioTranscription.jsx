import { useState } from "react";
import "./AudioTranscription.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "../../NavigationBar/NavigationBar";
import Footer from "../../Footer/Footer"

export default function AudioTranscription(){
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedAudio, setselectedAudio] = useState(null);
    const [textInput, settextInput] = useState("");
  
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    const handleAudioFile = (e) => {
      // setselectedAudio(e.target.files[0]);
      const audioFile=e.target.files[0];
      if(audioFile){
        const audioUrl=URL.createObjectURL(audioFile)
        setselectedAudio(audioUrl)
      }
    };

    const handleTextContent = (e) => {
      settextInput(e.target.value);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log("Selected Option:", selectedOption);
      console.log("Selected File:", selectedAudio);
      // Reset form fields if needed
    };
    return(
        <>
        <NavigationBar/>
        <h2 className="titleheading">Audio Transcription</h2>
        <br/>
        <Container className="maincontainer">
        <Row className="rowcontainer">
          <Col  xs={12} md={5}  className="containerBox1  "  >
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="selectOption" className="formgroup">
                <Form.Label>
                  {/* <h4>Select a Language Model</h4> */}
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
                <Form.Control type="file" accept="audio/*" onChange={handleAudioFile} />
              </Form.Group>
              <br/>

              {selectedAudio && (
                <div>
                  <h5>Audio Preview</h5>
                  <audio controls src={selectedAudio} type="audio/wav" />
                </div>
              )}
              <br/>

              <Form.Group controlId="textcontent" className="formgroup">
                <Form.Label>
                  <h5>Enter any keywords that are relevant to the context of the audio file:</h5>
                </Form.Label>
                <Form.Control as="textarea" value={textInput} onChange={handleTextContent} />
              </Form.Group>
              <br/><br/>

              <Button variant="light" type="submit">
                Upload
              </Button> 
            </Form>
          </Col>
          
        
          <Col xs={12} md={6} className="containerBox2"  >
          <h4>Transcription</h4>
          <br/>
          <h5>Select a model and upload the file. Your output will be displayed here... </h5>
         
          </Col>
        </Row>
      </Container>
      <Footer/>
      
      </>
    )
}