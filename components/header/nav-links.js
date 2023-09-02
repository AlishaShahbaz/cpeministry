import React, { useContext } from "react";
import Link from "next/link";
import { SearchContext } from "../../context/search-context";

const NavLinks = ({ extraClassName }) => {
  const { searchStatus, updateSearchStatus } = useContext(SearchContext);
  const handleSearchClick = (e) => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };

  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li className="dropdown">
        <Link href="/index">
          <a>Home</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/causes">
          <a>Causes</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="events">
          <a>Events</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="gallery">
          <a>Gallery</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
