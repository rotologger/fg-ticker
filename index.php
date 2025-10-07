<?php

/**
 * Plugin Name: FG Ticker
 * Description: Display a continuous, scrolling line of text horizontally across the screen
 * Version: 1.0
 * Author: Fabian Genthner
 * Author URI: https://fabiangenthner.de/
 * License GPL v2
 * Text Domain: fg-ticker
 */

if (!defined('ABSPATH')) exit;

class FG_Ticker
{
    function __construct()
    {
        register_block_type_from_metadata(__DIR__ . '/build');
    }
}

$fg_ticker = new FG_Ticker();
