/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Card";

function Filter({ data }) {
  const [selectedTag, setSelectedTag] = useState("");
  
  // Function to get unique tags from all items
  const getAllTags = () => {
    const tagsSet = new Set();
    data.forEach(item => {
      item.tags.forEach(tag => {
        tagsSet.add(tag);
      });
    });
    return Array.from(tagsSet);
  };
  
  const allTags = getAllTags();

  // Filter the data based on the selected tag
  const filteredData = selectedTag
    ? data.filter(item => item.tags.includes(selectedTag))
    : data;

  return (
    <div>
      <div className="d-flex justify-content-end mb-4" style={{justifyContent:"right"}}>
        <select
          className="form-select"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="" className="">All</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        {filteredData.map((item, index) => (
          <Card key={index} cardData={item} />
        ))}
      </div>
    </div>
  );
}

export default Filter;
