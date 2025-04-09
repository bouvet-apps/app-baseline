# Baseline Status for Enonic XP

This app will add a block to your site which can be used to display Baseline Web Status for a desired web feature (https://web.dev/baseline). It's fairly lightweight, only using Rollup to bundle some javascript and make it available as an asset.

Based on the vanilla starter from Enonic there should be nothing fancy to get this running. See the package file for available scripts.

The block will make an API call to the Web Features API, https://api.webstatus.dev/v1/features/. You will need to add this to your CSP to properly display the results.
