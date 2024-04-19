import React from 'react';

const Results = ({ results }) => {
  results();
  return (
    <div className="results-container">
      {
        // results.map((item) => (
        //   <div key={item.id.videoId} className="result-item">
        //     <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
        //     <p>{item.snippet.title}</p>
        //   </div>
        // ))
      }
    </div>
  );
};

export default Results;