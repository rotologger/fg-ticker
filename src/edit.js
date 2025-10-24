import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  __experimentalNumberControl as NumberControl,
  ToggleControl,
  RadioControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
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
    <>
      <InspectorControls>
        <PanelBody title={__("Settings", "fg-ticker")}>
          {/* Delay before start */}
          <NumberControl
            label={__("Delay before start", "fg-ticker")}
            help={__(
              "Time in ms before the marquee starts animating",
              "fg-ticker"
            )}
            value={delayBeforeStart}
            onChange={(val) => setAttributes({ delayBeforeStart: val * 1 })}
            min="0"
            max="2000"
            step="10"
          />

          {/* Duplicated */}
          <ToggleControl
            label={__("Duplicated", "fg-ticker")}
            help={__(
              "Should the marquee be duplicated to show an effect of continuous flow. Use this only when the text is shorter than the container",
              "fg-ticker"
            )}
            checked={duplicated}
            onChange={() => setAttributes({ duplicated: !duplicated })}
          />

          {/* Direction */}
          <RadioControl
            label={__("Direction", "fg-ticker")}
            help={__(
              "Direction towards which the marquee will animate",
              "fg-ticker"
            )}
            selected={direction}
            options={[
              { label: __("Left", "fg-ticker"), value: "left" },
              { label: __("Right", "fg-ticker"), value: "right" },
            ]}
            onChange={(direction) => setAttributes({ direction })}
          />

          {/* Pause on Hover */}
          <ToggleControl
            label={__("Pause on hover", "fg-ticker")}
            help={__("Pause the marquee on hover", "fg-ticker")}
            checked={pauseOnHover}
            onChange={() => setAttributes({ pauseOnHover: !pauseOnHover })}
          />

          {/* Speed */}
          <NumberControl
            label={__("Speed", "fg-ticker")}
            help={__(
              "Speed allows you to set a relatively constant marquee speed regardless of the width of the containing element. Speed is measured in pixels/second",
              "fg-ticker"
            )}
            value={speed}
            onChange={(val) => setAttributes({ speed: val * 1 })}
            min="0"
            max="1000"
            step="10"
          />

          {/* Gap */}
          <NumberControl
            label={__("Gap", "fg-ticker")}
            help={__("Gap in pixels between the tickers", "fg-ticker")}
            value={gap}
            onChange={(val) => setAttributes({ gap: val * 1 })}
            min="0"
            max="200"
            step="10"
          />

          {/* Recalc on resize */}
          <ToggleControl
            label={__("Recalc on resize", "fg-ticker")}
            help={__("Should the marquee be updated on resize", "fg-ticker")}
            checked={recalcResize}
            onChange={() => setAttributes({ recalcResize: !recalcResize })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <InnerBlocks allowedBlocks={["core/button", "core/paragraph"]} />
      </div>
    </>
  );
}
