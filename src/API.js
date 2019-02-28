import axios from "axios";

export default {
  getBooks: function(q) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=search+terms?q="+q);
  }
};
