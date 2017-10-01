import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "------// credit: Nicolas Gallagherheart": {
        "position": "relative",
        "width": 100,
        "height": 90
    },
    "heart:before": {
        "position": "absolute",
        "content": "",
        "left": 50,
        "top": 0,
        "width": 50,
        "height": 80,
        "background": "red",
        "MozBorderRadius": "50px 50px 0 0",
        "borderRadius": "50px 50px 0 0",
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "OTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)",
        "WebkitTransformOrigin": "0 100%",
        "MozTransformOrigin": "0 100%",
        "MsTransformOrigin": "0 100%",
        "OTransformOrigin": "0 100%",
        "transformOrigin": "0 100%"
    },
    "heart:after": {
        "position": "absolute",
        "content": "",
        "left": 0,
        "top": 0,
        "width": 50,
        "height": 80,
        "background": "red",
        "MozBorderRadius": "50px 50px 0 0",
        "borderRadius": "50px 50px 0 0",
        "WebkitTransform": "rotate(45deg)",
        "MozTransform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "OTransform": "rotate(45deg)",
        "transform": "rotate(45deg)",
        "WebkitTransformOrigin": "100% 100%",
        "MozTransformOrigin": "100% 100%",
        "MsTransformOrigin": "100% 100%",
        "OTransformOrigin": "100% 100%",
        "transformOrigin": "100% 100%"
    }
});