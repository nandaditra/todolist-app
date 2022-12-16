import { 
   Button, 
   Card, 
   Col, 
   Container,
   Form,
   Row } 
   from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


const textTitle = {
   textAlign : "center",
   marginTop : "10px",
   marginBottom : "10px",
   padding: "10px" 
}

function App() {
    const [ post, setPost ] = useState({
    title : "",
    content : ""
  })
  const [data, setData] = useState([])

  const handleTitle = (e) => {
     e.preventDefault()
     const inputTitle = e.target.value 
        setPost(prev => {
          return {
            ...prev,
            title : inputTitle
          }
        })
  }

  const handleContent = (e) => {
    e.preventDefault()
    const inputContent = e.target.value 
       setPost(prev => {
         return {
          ...prev,
          content: inputContent
         }
       })   
  }

  const handleDelete = (index) => {
      const deleteItem = data.filter((item)=> {
        return index !== item
      })
      setData(deleteItem)
  }

  const handleSubmit = (e) => {
     e.preventDefault()
     data.push(post)
     setData(data)
  }

  console.log(data)

  return (
    <Container>
         <h1 style={textTitle}>TodoList App</h1>
         <Row>
            <Form>
               <Form.Group className="mb-3">
                   <Form.Label>Title</Form.Label>
                   <Form.Control 
                       type="text" 
                       value={post.title}
                       onChange={handleTitle}
                       placeholder="enter the title"/>
               </Form.Group>

               <Form.Group className="mb-3">
                   <Form.Label>Content</Form.Label>
                   <Form.Control 
                      as ="textarea" 
                      type="text" 
                      value={post.content}
                      onChange={handleContent}
                      style={{ height: '200px' }}
                      placeholder="enter the content"/>
               </Form.Group>

               <Button 
                  onClick={handleSubmit}
                  type="submit"
                  variant="danger" >
                    Add 
               </Button>
            </Form>  
         </Row>

         <Row>
             <h3 style={textTitle}>Activites Today</h3>
             {data.map((post, index)=>
                <Col  xs={6} md={4} key={index}>
                  <Card>
                      <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                           {post.content}
                        </Card.Text>
                        <Button 
                            onClick={() => handleDelete(post)}
                            variant="primary">Delete</Button>
                      </Card.Body>
                  </Card>
              </Col>
             )}
             
         </Row>
    </Container>
  );
}

export default App;
