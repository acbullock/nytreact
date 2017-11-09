import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { ListItem } from "../../components/List";
import Query from "../../components/Query";
import Results from "../../components/Results";
class Search extends Component {
  // Setting our component's initial state
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: "",
    handleInputChange : event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    },
    handleFormSubmit : event => {
      event.preventDefault();
      if (this.state.topic) {
        this.setState({articles: [<img src="lg.fidget-spinner.gif" alt="Loading.." height="400" width="400"/>]});
        API.searchNyt(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res =>{
          console.log(res.data.response.docs.length);
        const results = this.showResults(res.data.response.docs);
        this.setState({articles: results, topic: "", startYear:"", endYear: ""}); 
        });
      }
    }
  };
  
  saveArticle = (title, url, date) => {
    API.saveArticle({title: title, url: url, date: date});
  }

  showResults = (articles) =>{
    if(articles.length < 1){
      return <h2>No Results. Try again.</h2>;
    }
    else{
    return articles.map(article => (
      <div key={article.web_url}>
        <ListItem>
          <h4>{article.headline.main}</h4>
          <p>{article.snippet}</p>
          <p>{article.pub_date}</p>
          <a className="btn btn-lg btn-primary mr-2" href={article.web_url} target="_blank">Go to Article</a>
          <button className="btn btn-lg btn-info m2" onClick={()=>this.saveArticle(article.headline.main, article.web_url, article.pub_date)}>Save Article</button>
        </ListItem>
        <hr/>
      </div>
    )); 
  }
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-5">
            <Query data={this.state}/>
          </Col>
          <Col size="md-7">
            <Results articles={this.state.articles} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
