import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  __experimentalNumberControl as NumberControl,
  RangeControl,
  ToggleControl,
  RadioControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { direction, pauseOnHover, speed, gap } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Settings", "fg-ticker")}>
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
          <RangeControl
            label={__("Speed", "fg-ticker")}
            help={__(
              __(
                "Speed allows you to set a relatively constant marquee speed regardless of the width of the containing element. Speed is measured in pixels/second",
                "fg-ticker"
              )
            )}
            value={speed}
            onChange={(val) => setAttributes({ speed: val * 1 })}
            min="1"
            max="100"
            step="1"
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
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <InnerBlocks allowedBlocks={["core/button", "core/paragraph"]} />
      </div>
    </>
  );
}
