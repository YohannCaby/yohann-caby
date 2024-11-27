export const colorMapping = {
    orange: {hue: 30, saturation: 100},
    yellow: {hue: 60, saturation: 100},
    blue: {hue: 240, saturation: 100},
    cyan: {hue: 180, saturation: 100},
    purple: {hue: 270, saturation: 100},
    green: {hue: 120, saturation: 100},
    red: {hue: 0, saturation: 100},
    pink: {hue: 330, saturation: 100},
    grey: {hue: 0, saturation: 0},
    brown: {hue: 30, saturation: 100},
    teal: {hue: 180, saturation: 100},
    lime: {hue: 90, saturation: 100},
    indigo: {hue: 240, saturation: 100},
    amber: {hue: 60, saturation: 100},
    deepOrange: {hue: 0, saturation: 100},
    deepPurple: {hue: 270, saturation: 100},
    lightBlue: {hue: 210, saturation: 100},
    lightGreen: {hue: 90, saturation: 100},
}

export const getHueSaturation = (color: string) => {
    return colorMapping[color] == undefined ? colorMapping['grey'] : colorMapping[color]
}