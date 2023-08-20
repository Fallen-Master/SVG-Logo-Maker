class Shape {
    constructor() {
        this.color =''
        this.strokeWidth =''
        this.strokeColor =''
    }

    setColor(color){
        this.color = color
    }
    setStrokeWidth(strokeWidth){
        this.strokeWidth = strokeWidth
    }
    setStrokeColor(strokeColor){
        this.strokeColor = strokeColor
    }
}

module.exports = Shape