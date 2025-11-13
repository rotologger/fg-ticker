import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { direction, pauseOnHover, speed, gap } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: pauseOnHover ? "pauseonhover" : "",
      })}
      data-direction={direction}
      data-speed={speed}
      data-gap={gap}
    >
      <div className="ticker-list">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
