import search from "../img/search.svg";
import mic from "../img/googlemic_clr_24px.svg";
import logo from "../img/google_logo.svg";
import { useEffect, useState } from "react";
import SearchData from "./SearchData";
import '../css/Search.css';

function Search() {
  const [query, setQuery] = useState("");
  const [color,setColor]=useState(0);
  const col=["white","grey","green","blue"];
  const onKeyUpHandle = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setQuery(e.target.value);
    }
  };
  useEffect(() => {
    document.title = `Result of ${query}`;
  }, [query]);

  if (query === "") {
    return (
      <>
        <div style={{backgroundColor:col[color]}} className="Search">
          <div>
            <img className="Search-logo" src={logo} alt="logo" />
          </div>
          <div className="Search-bar">
            <img className="Search-bar-prev" src={search} alt="icon" />
            <input
              className="Search-input"
              defaultValue={query}
              onKeyUp={onKeyUpHandle}
              placeholder="Search Google or type a URL"
            />
            <img className="Search-bar-next" src={mic} alt="mic-icon" />
          </div>
          <button onClick={()=>setColor((color+1)%4)}>Customize</button>
        </div>
      </>
    );
  } else {
    return <SearchData query={query} />;
  }
}
export default Search;
