import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const {
    delayBeforeStart,
    duplicated,
    direction,
    pauseOnHover,
    speed,
    gap,
    recalcResize,
  } = attributes;

  return (
    <div
      {...useBlockProps.save()}
      data-delay={delayBeforeStart}
      data-duplicated={duplicated}
      data-direction={direction}
      data-pauseonhover={pauseOnHover}
      data-speed={speed}
      data-gap={gap}
      data-recalcresize={recalcResize}
    >
      <InnerBlocks.Content />
    </div>
  );
}
