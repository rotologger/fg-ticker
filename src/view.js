import marquee from "vanilla-marquee";

class Ticker {
  constructor() {
    this.tickers =
      Array.from(document.querySelectorAll(".wp-block-fg-fg-ticker")) || [];

    this.tickers.forEach((ticker) => this.init(ticker));
  }

  init(el) {
    const {
      delay,
      duplicated,
      direction,
      pauseonhover,
      speed,
      gap,
      recalcresize,
    } = el.dataset;

    new marquee(el, {
      delayBeforeStart: delay,
      direction,
      duplicated,
      pauseOnHover: pauseonhover == "true" || false,
      speed,
      gap: 0,
      recalcResize: recalcresize == "true" || false,
    });

    el.querySelectorAll(".js-marquee")?.forEach((marquee) => {
      const childEls = Array.from(marquee.children);

      childEls.forEach((el) => {
        el.style.padding = `0 ${gap / 2}px`;
      });
    });
  }
}

const ticker = new Ticker();
