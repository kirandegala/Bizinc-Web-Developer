<!-- Section 7: WordPress [Mandatory]
1. Coding Challenge: Basic Custom Plugin -->

<?php
/*
Plugin Name: Greeting Plugin
Description: Adds a greeting shortcode.
*/

function greeting_shortcode() {
    return "Welcome to My Site!";
}
add_shortcode('greeting', 'greeting_shortcode');

// 2. Conceptual Question: WordPress Post vs. Page
// Post: Time-sensitive content, often displayed in reverse chronological order (e.g., blog articles).
// Page: Static content that is typically not time-sensitive (e.g., "About Us" or "Contact").
