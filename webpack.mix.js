const mix = require('laravel-mix')

// setup
mix.disableSuccessNotifications();

// email receipt
mix.sass("./scss/receipt_email/index.scss", "build/receipt_email/receipt_email.css")
    .copy("./assets/logo stamps.png", "build/assets/logo stamps.png")