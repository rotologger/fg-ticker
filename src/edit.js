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
import { __, setLocaleData } from "@wordpress/i18n";
import "./editor.scss";
import metadata from "./block.json";

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
        <PanelBody title={__("Settings", metadata.textdomain)}>
          {/* Delay before start */}
          <NumberControl
            label={__("Delay before start", metadata.textdomain)}
            help={__(
              "Time in ms before the marquee starts animating",
              metadata.textdomain
            )}
            value={delayBeforeStart}
            onChange={(val) => setAttributes({ delayBeforeStart: val * 1 })}
            min="0"
            max="2000"
            step="10"
          />

          {/* Duplicated */}
          <ToggleControl
            label={__("Duplicated", metadata.textdomain)}
            help={__(
              "Should the marquee be duplicated to show an effect of continuous flow. Use this only when the text is shorter than the container",
              metadata.textdomain
            )}
            checked={duplicated}
            onChange={() => setAttributes({ duplicated: !duplicated })}
          />

          {/* Direction */}
          <RadioControl
            label={__("Direction", metadata.textdomain)}
            help={__(
              "Direction towards which the marquee will animate",
              metadata.textdomain
            )}
            selected={direction}
            options={[
              { label: __("Left", metadata.textdomain), value: "left" },
              { label: __("Right", metadata.textdomain), value: "right" },
            ]}
            onChange={(direction) => setAttributes({ direction })}
          />

          {/* Pause on Hover */}
          <ToggleControl
            label={__("Pause on hover", metadata.textdomain)}
            help={__("Pause the marquee on hover", metadata.textdomain)}
            checked={pauseOnHover}
            onChange={() => setAttributes({ pauseOnHover: !pauseOnHover })}
          />

          {/* Speed */}
          <NumberControl
            label={__("Speed", metadata.textdomain)}
            help={__(
              "Speed allows you to set a relatively constant marquee speed regardless of the width of the containing element. Speed is measured in pixels/second",
              metadata.textdomain
            )}
            value={speed}
            onChange={(val) => setAttributes({ speed: val * 1 })}
            min="0"
            max="1000"
            step="10"
          />

          {/* Gap */}
          {duplicated && (
            <NumberControl
              label={__("Gap", metadata.textdomain)}
              help={__(
                "Gap in pixels between the tickers",
                metadata.textdomain
              )}
              value={gap}
              onChange={(val) => setAttributes({ gap: val * 1 })}
              min="0"
              max="200"
              step="10"
            />
          )}

          {/* Recalc on resize */}
          <ToggleControl
            label={__("Recalc on resize", metadata.textdomain)}
            help={__(
              "Should the marquee be updated on resize",
              metadata.textdomain
            )}
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
