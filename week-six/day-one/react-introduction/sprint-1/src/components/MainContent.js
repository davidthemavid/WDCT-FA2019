import React from "react";

export default function MainContent() {
  return (
    <main class="main-content">
      <div class="main-content__left">
        <section class="main-content__section">
          <div class="main-content__product">PRODUCT ONE</div>
          <div class="main-content__product">PRODUCT TWO</div>
          <div class="main-content__product">PRODUCT THREE</div>
        </section>
        <article class="main-content__image-gallery">
          <img
            src="https://via.placeholder.com/150/80DEEA"
            alt="placeholder-image"
            class="main-content__image"
          />
          <img
            src="https://via.placeholder.com/150/80DEEA"
            alt="placeholder-image"
            class="main-content__image"
          />
          <img
            src="https://via.placeholder.com/150/80DEEA"
            alt="placeholder-image"
            class="main-content__image"
          />
        </article>
      </div>
      <aside class="main-content__right">
        <article class="main-content__blogpost">BLOGPOST ONE</article>
        <article class="main-content__blogpost">BLOGPOST TWO</article>
        <article class="main-content__blogpost">BLOGPOST THREE</article>
        <article class="main-content__blogpost">BLOGPOST FOUR</article>
      </aside>
    </main>
  );
}
