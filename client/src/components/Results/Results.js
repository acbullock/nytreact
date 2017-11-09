import React from "react";
import "./Results.css";
import { List} from "../../components/List";

const Results = props => (
    <div>
        <h2 className="heading">Results</h2>
        <List>
            {props.articles}
        </List>
    </div>
);

export default Results;
