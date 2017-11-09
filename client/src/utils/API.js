import axios from "axios";

export default {
  // Gets all articles
  queryBaseUrl: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=",
  searchNyt: function(topic, startDate, endDate) {
    return axios.get(`${this.queryBaseUrl}${topic}${startDate!=="" ? `&begin_date=${startDate}0101`:""}${endDate!=="" ? `&end_date=${endDate}1231`:""}`);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/saved", articleData);
  },
  getArticles: function(){
    return axios.get("/api/saved");
  },
  deleteArticle: function(id){
    return axios.delete("api/saved/"+id);
  }
};
