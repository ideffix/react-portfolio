import React from 'react'
import uuid from 'uuid'
import { useState } from 'react'
import * as Scroll from 'react-scroll'

const defaultScrollProps = {
    duration: 1500,
    delay: 100,
    smooth: true,
};

const useScroll = options => {
    const [id] = useState(uuid.v4());
    const scrollTo = () =>
        Scroll.scroller.scrollTo(id, options || defaultScrollProps);
    const Element = props => <Scroll.Element name={id} {...props} />;
    return [Element, scrollTo];
}

export default useScroll;
