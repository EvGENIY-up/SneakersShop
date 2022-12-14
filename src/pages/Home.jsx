import React from "react";
import { AppContext } from "../App";
import Card from "../components/Card/Card";

function Home ({ 
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading
 }) {

  const {fullItems} = React.useContext(AppContext);

  const renderSearchItems = () => {
    const filtredItems = fullItems.filter((item) =>
     item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item,index) => (
        <Card
          key={index}
          onFavorite = {(obj) => onAddToFavorite(obj) }
          onPlus = {(obj) => onAddToCart(obj) }
          loading = {isLoading}
          {...item}
        />
    ));

  }

  const renderItems = () => {
    return (isLoading ? [...Array(8)] : items).map((item,index) => (
      <Card
        key={index}
        onFavorite = {(obj) => onAddToFavorite(obj) }
        onPlus = {(obj) => onAddToCart(obj) }
        loading = {isLoading}
        {...item}
      />
  ));
  }

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40" >
        <h1 className="">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кросcовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          {searchValue && <img onClick={() => setSearchValue('') } className="clear cu-p" src="/img/btn-remove.svg" alt="Remove" />}
          <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {searchValue.length > 0 ? renderSearchItems() : renderItems()}
      </div>
    </div>
  );
}

export default Home;