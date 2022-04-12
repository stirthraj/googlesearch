import { useEffect, useRef, useState } from "react";
import "../css/SearchData.css";
import search from "../img/search.svg";
import mic from "../img/googlemic_clr_24px.svg";
import logo from "../img/google_logo.svg";
import SearchResult from "./SearchResult";

function SearchData(props) {
  const [query, setQuery] = useState(props.query);
  const [result, setResult] = useState([]);

  const qq = useRef();
  const onKeyUpHandle = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setQuery(e.target.value);
    }
  };
  const API_KEY = "AIzaSyDrLZZoy4wQ9 - t0dJvWAfMxWlhfvdeXdak";
  const CONTEXT_KEY = "b285d02aa413dc4f4";

  useEffect(() => {
    async function GoogleQuery() {
      await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`
      )
        .then((res) => res.json())
        .then((res) => setResult(res.items))
        .catch((error) => {
          console.log(error);
        });
      document.title = `Result of ${query}`;
    }
    GoogleQuery();
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
        <SearchResult data={result} />
      </div>
      <p></p>
      <div className="footer">
        <h4>Eduwheel India &copy; @2021-2022</h4>
      </div>
    </>
  );
}

export default SearchData;
