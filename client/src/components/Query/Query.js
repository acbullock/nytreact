import React from "react";
import "./Query.css";
import {Input, FormBtn} from "../Form";
const Query = props => (
    <div>
    <h2 className="heading">Search Articles</h2>
    
     <form>
      <Input
        value={props.data.topic}
        onChange={props.data.handleInputChange}
        name="topic"
        placeholder="Topic (required)"
      />
       <Input
        value={props.data.startYear}
        onChange={props.data.handleInputChange}
        name="startYear"
        placeholder="Start Year (required)"
      />
      <Input
        value={props.data.endYear}
        onChange={props.data.handleInputChange}
        name="endYear"
        placeholder="End Year (required)"
      /> 
      <FormBtn
        disabled={!(props.data.topic && props.data.startYear && props.data.endYear)}
        onClick={props.data.handleFormSubmit}
      >
        Search NYT
      </FormBtn>
    </form>
    </div>
);

export default Query;
