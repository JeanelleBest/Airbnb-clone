import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays - 26 august to 30 august- 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="data:image/jpeg;base64,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"
        location="Private room in  center of London"
        title="Stay at this spacious House"
        description="2 guest - 1 bedroom "
        star={4.2}
        price="$40 per night"
        totaL="$117 total"
      />
      <SearchResult
        img="data:image/jpeg;base64,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"
        location="Private room in  center of London"
        title="Stay at this spacious House"
        description="2 guest - 2 bedroom "
        star={4.8}
        price="$60 per night"
        totaL="$300 total"
      />
    </div>
  );
}

export default SearchPage;
