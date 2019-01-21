"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zoomSvg = (svg) => svg.onwheel = e => {
    const { width: clientWidth, height: clientHeight } = svg.getBoundingClientRect();
    let { x, y, width, height } = svg.viewBox.baseVal;
    let { layerX, layerY, deltaY } = e;
    // need to transform layerX, layerY to map coords
    const scaleX = width / clientWidth;
    const scaleY = height / clientHeight;
    layerX *= scaleX;
    layerY *= scaleY;
    layerX += x;
    layerY += y;
    // should use deltaMode but for now...
    deltaY = deltaY < 0 ? -1 : deltaY > 0 ? 1 : 0;
    const amount = 1 + (deltaY / 40);
    x -= layerX;
    y -= layerY;
    x *= amount;
    y *= amount;
    width *= amount;
    height *= amount;
    x += layerX;
    y += layerY;
    console.log(e);
    console.log({ x, y, width, height, deltaY });
    Object.assign(svg.viewBox.baseVal, { x, y, width, height });
};
exports.panSvg = (svg) => {
    let lastPosition = { x: 0, y: 0 };
    let isDown;
    const pointFromEvent = e => {
        let x = 0;
        let y = 0;
        if (e['targetTouches']) {
            x = e.targetTouches[0].layerX;
            y = e.targetTouches[0].layerY;
        }
        else {
            x = e.layerX;
            y = e.layerY;
        }
        return { x, y };
    };
    const onDown = e => {
        lastPosition = pointFromEvent(e);
        isDown = true;
    };
    const onUp = () => {
        isDown = false;
    };
    const onMove = e => {
        if (!isDown)
            return;
        e.preventDefault();
        const { width } = svg.viewBox.baseVal;
        const { width: clientWidth } = svg.getBoundingClientRect();
        const ratio = width / clientWidth;
        const position = pointFromEvent(e);
        svg.viewBox.baseVal.x -= (position.x - lastPosition.x) * ratio;
        svg.viewBox.baseVal.y -= (position.y - lastPosition.y) * ratio;
        lastPosition = position;
    };
    if ('PointerEvent' in window) {
        svg.onpointerdown = onDown;
        svg.onpointerup = onUp;
        svg.onpointermove = onMove;
    }
    else {
        svg.onmousedown = onDown;
        svg.onmouseup = onUp;
        svg.onmousemove = onMove;
        svg.ontouchstart = onDown;
        svg.ontouchend = onUp;
        svg.ontouchmove = onMove;
    }
};
//# sourceMappingURL=svg-events.js.map