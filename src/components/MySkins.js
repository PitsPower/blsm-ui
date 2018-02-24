import React from 'react';

import Skin from './Skin';

var skins = require('../data/skins.json').map((skin, i) => (
    <Skin {...skin} key={i} />
));

export default () => (
    <div className="skins">{skins}</div>
);
