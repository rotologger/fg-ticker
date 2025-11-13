class Ticker {
  constructor() {
    this.tickers = document.querySelectorAll(".wp-block-fg-fg-ticker");
    this.init();
  }

  init() {
    this.tickers?.forEach((ticker) => {
      const { direction, speed, gap } = ticker.dataset;

      const list = ticker.querySelector(".ticker-list");
      const clone = list?.cloneNode(true);
      clone && ticker.appendChild(clone);

      ticker.querySelectorAll(".ticker-list").forEach((list) => {
        list.style.animation = `ticker ${
          list.offsetWidth / speed / 5
        }s linear infinite`;
        list.style.animationDirection =
          direction === "left" ? "normal" : "reverse";

        list
          .querySelectorAll("p")
          ?.forEach((item) => (item.style.marginRight = `${gap}px`));
      });
    });
  }
}

const ticker = new Ticker();
