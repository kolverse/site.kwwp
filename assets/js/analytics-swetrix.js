import * as params from '@params';

document.addEventListener('DOMContentLoaded', () => {
  swetrix.init(params.swetrixid, {
    respectDNT: true
  })
  swetrix.trackViews()
})
