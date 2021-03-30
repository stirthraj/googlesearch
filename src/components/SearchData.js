import { useEffect, useRef, useState } from 'react';
import '../css/SearchData.css';
import search from "../img/search.svg";
import mic from "../img/googlemic_clr_24px.svg";
import logo from "../img/google_logo.svg";

function SearchData(props) {
  const [query,setQuery]=useState(props.query);
  const [result,setResult]=useState([]);  

  const qq=useRef();
  const onKeyUpHandle = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setQuery(e.target.value);
    }
  };
  const API_KEY = 'AIzaSyDrLZZoy4wQ9 - t0dJvWAfMxWlhfvdeXdak';
  const CONTEXT_KEY = 'b285d02aa413dc4f4';

  useEffect(() => {
    document.title = `Result of ${query}`;
    fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`)
    .then(res=>res.json())
    .then(res=>{
    setResult(res.items);
    })
  }, [query]);

  return (
    <>
      <div className="Sticky">
        <div>
          <img className="Sticky-logo" src={logo} alt="logo" />
        </div>
        <div className="Sticky-bar">
          <input
            ref={qq}
            className="Sticky-input"
            size="50"
            defaultValue={query}
            onKeyUp={onKeyUpHandle}
            placeholder="Search Google or type a URL"
          />
          <button
            className="Sticky-btn"
            onClick={() => setQuery(qq.current.value)}
          >
            <img className="Sticky-bar-search" src={search} alt="icon" />
          </button>
          <img className="Sticky-bar-mic" src={mic} alt="mic-icon" />
        </div>
        <div className="Sign-up">
          <button className="Sign-btn">Sign in</button>
        </div>
      </div>
      <div className="container">
        {result.map((res) => (
          <div key={res.id} className="card">
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
        ))}
      </div>
      <div className="footer">
        <h4>KloudOne &copy; @2021-2022</h4>
      </div>
    </>
  );
}
export default SearchData;
