import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Saved extends Component {
  // Setting our component's initial state
  state = {
    articles: [],
  };
  loadSaved = () => {
      API.getArticles().then(res=>{
          var data = res.data;
          console.log(data);
          var items = data.map(article=>{
              console.log(article.title);
              return (
                  <div key={article._id}>
                      <ListItem>
                          <h4>{article.title}</h4>
                          <p>{article.date}</p>
                          <a className="btn btn-lg btn-success mr-2" href={article.url} target="_blank">Go to Article</a>
                          <DeleteBtn onClick = {()=>{this.removeArticle(article._id)}}></DeleteBtn>
                          <hr/>
                      </ListItem>
                  </div>
              );
          });
          this.setState({articles: items});
      });
  };
  removeArticle = id =>{
      API.deleteArticle(id).then(res=>{
          this.loadSaved();
      });
  };

  componentDidMount(){
      this.loadSaved();
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            
              <h2 className="heading">Saved Articles</h2>
            
           </Col>
           <Col size="md-7">
           <List>
                {this.state.articles}
            </List>
           </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
