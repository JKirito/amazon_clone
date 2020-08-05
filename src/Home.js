import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Hush/Eventspage/GW/Prime_GW_Day_of_Headers_1500x600_Deals._CB408191898_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12345"
          title="EDEN"
          price={10}
          rating={5}
          image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/Anatomy_book_cover.png?auto=format&q=60&fit=max&w=930"
        />
        <Product
          id="12345"
          title="EDEN"
          price={10}
          rating={5}
          image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/Anatomy_book_cover.png?auto=format&q=60&fit=max&w=930"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345"
          title="EDEN"
          price={10}
          rating={5}
          image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/Anatomy_book_cover.png?auto=format&q=60&fit=max&w=930"
        />
        <Product
          id="12345"
          title="EDEN"
          price={10}
          rating={5}
          image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/Anatomy_book_cover.png?auto=format&q=60&fit=max&w=930"
        />
        <Product
          id="12345"
          title="EDEN"
          price={10}
          rating={5}
          image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/Anatomy_book_cover.png?auto=format&q=60&fit=max&w=930"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345"
          title="EDEN"
          price={10}
          rating={5}
          image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/Anatomy_book_cover.png?auto=format&q=60&fit=max&w=930"
        />
      </div>
    </div>
  );
}

export default Home;
