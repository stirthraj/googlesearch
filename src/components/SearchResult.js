function SearchResult(props){
    console.log("props:"+props);
    if(typeof(props.data)==="object"){
      const Results = props.data.map((res) => (
        <div key={res.id } className="card">
          <div style={{ margin: "10px" }}>
            <div className="card-link">{res.formattedUrl}</div>
            <a href={res.formattedUrl}>
              <h3
                className="card-title"
                dangerouslySetInnerHTML={{ __html: res.htmlTitle }}
              />
            </a>
            <div>{res.snippet}</div>
          </div>
        </div>
      ));
return (
  <>
    <h3>Search Results</h3>
    {Results}
  </>
);
    }
    else{
      return(<><div>
        Error to get request
        </div></>)
    }
    
}
export default SearchResult;

