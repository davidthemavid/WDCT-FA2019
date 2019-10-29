import React from "react";

export default function MainContent() {
  return (
    <main className="main-content">
      <div className="main-content__left">
        <section className="main-content__section">
          <div className="main-content__product">PRODUCT ONE</div>
          <div className="main-content__product">PRODUCT TWO</div>
          <div className="main-content__product">PRODUCT THREE</div>
        </section>
        <article className="main-content__image-gallery">
          <img
            src="https://via.placeholder.com/150/80DEEA"
            alt="placeholder"
            className="main-content__image"
          />
          <img
            src="https://via.placeholder.com/150/80DEEA"
            alt="placeholder"
            className="main-content__image"
          />
          <img
            src="https://via.placeholder.com/150/80DEEA"
            alt="placeholder"
            className="main-content__image"
          />
        </article>
      </div>
      <aside className="main-content__right">
        <article className="main-content__blogpost">BLOGPOST ONE</article>
        <article className="main-content__blogpost">BLOGPOST TWO</article>
        <article className="main-content__blogpost">BLOGPOST THREE</article>
        <article className="main-content__blogpost">BLOGPOST FOUR</article>
      </aside>
    </main>
  );
}
