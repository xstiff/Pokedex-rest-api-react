import "./Search.scss";

export const Search = ({HandleSearch}) => {
    return <div className="search-container">
    <input type="text" placeholder="Search Pokemon by name"  onInput={
      (e) => {
        HandleSearch(e.target.value);
      }
    }/>
  </div>
}
