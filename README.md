![A gif-in-action](https://media.giphy.com/media/3ohze1ac2w79nnujOU/giphy.gif)

## Chrome New Tab Timezones

Because you're so cultured, right?

### Local Installation
`git clone` this repo. Go to Chrome Settings > Extensions ([chrome://extensions](chrome://extensions)). Choose "Load unpacked extension" and choose the `unpacked-extension` folder in this repo.

Disable the extension to switch back to the original Chrome New Tab page.

### Customization

Install locally and change or add to the list in `newtab.html`:

```html
<li><span class="time" data-utc-offset="-7">&nbsp;</span><span class="location"> in San Francisco</span></li>
```

Change the city name and `data-utc-offset`, or add a new `<li>` with the same.

### Credit

Based on [pearkes](https://github.com/pearkes)' [chrome-new-tab-timezones](https://github.com/pearkes/chrome-new-tab-timezones) who based his stuff on [adamschwartz](https://github.com/adamschwartz)'s [chrome-new-tab](https://github.com/adamschwartz/chrome-new-tab) who based his newtab page on [tech-no-crat](https://github.com/tech-no-crat)'s [chrome-newtab-minimalism](https://github.com/tech-no-crat/chrome-newtab-minimalism).

*How deep does the credit go??!*
