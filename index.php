<?php

/**
 * Plugin Name: FG Ticker
 * Description: Display a continuous, scrolling line of text horizontally across the screen
 * Version: 1.0
 * Author: Fabian Genthner
 * Author URI: https://fabiangenthner.de/
 * License GPL v2
 * Text Domain: fg-ticker
 * Domain Path: /languages
 */

if (!defined('ABSPATH')) exit;

class FG_Ticker
{
    function __construct()
    {
        register_block_type_from_metadata(__DIR__ . '/build');
        add_action('init', [$this, 'load_translations']);
    }

    function load_translations()
    {
        $textdomain = 'fg-ticker';

        load_plugin_textdomain(
            $textdomain,
            false,
            'fg-ticker/languages/'
        );

        wp_set_script_translations(
            'fg-fg-ticker-editor-script',
            $textdomain,
            plugin_dir_path(__FILE__) . 'languages'
        );
    }
}

$fg_ticker = new FG_Ticker();
