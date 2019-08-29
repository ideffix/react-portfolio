import React from 'react';
import uuid from 'uuid';
import { useState } from 'react';
import * as Scroll from 'react-scroll';
import { DEFAULT_SCROLL_OPTIONS } from '../config/scrollTo';

const useScroll = options => {
    const [id] = useState(uuid.v4());
    const scrollTo = () =>
        Scroll.scroller.scrollTo(id, options || DEFAULT_SCROLL_OPTIONS);
    const Element = props => <Scroll.Element name={id} {...props} />;
    return [Element, scrollTo];
};

export default useScroll;
