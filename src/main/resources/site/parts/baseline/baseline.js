const portal = require('/lib/xp/portal');
const assetLib = require('/lib/enonic/asset')

exports.get = function(req) {   
    

  const component = portal.getComponent();
  const url = assetLib.assetUrl({path: 'baseline.min.js'})

  return {
    body: `<baseline-status featureId="${component.config.featureId}"></baseline-status>`,
    pageContributions: {
        headEnd: [
            `<script src="${url}" type="module"></script>`
        ]
      }
  };
};