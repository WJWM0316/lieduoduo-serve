class canvasPocessor {
	ellipsis (ctx, text, width, x, y, color, bgObject) {
		let ellipsisWidth = ctx.measureText('...').width
		let textWidth = ctx.measureText(text).width
		let curString = ''
		let nextString = ''
		let nextPositionX = x + textWidth
		
		if (textWidth > width) {
			for(let i = 0; i < text.length; i++) {
				curString = curString + text[i]
				if (i < text.length - 1) nextString = curString + text[i+1]
				if (ctx.measureText(nextString).width >= (width - ellipsisWidth)) {
					curString = curString + '...'
					nextPositionX = x + width - ellipsisWidth + 20
					if (bgObject) nextPositionX = this.addBorder({ctx, text:curString, bgObject})
					ctx.fillStyle = color
	        ctx.fillText(curString, x, y)
	        return nextPositionX
				}
			}
		} else {
			if (bgObject) {
				nextPositionX = this.addBorder({ctx, text, bgObject})
			}
			ctx.fillStyle = color
			ctx.fillText(text, x, y)
			return nextPositionX
		}
	}
	addBorder ({ctx, text, bgObject}) {
		if (bgObject) {
			let metricsW = ctx.measureText(text).width
			if (!bgObject.x) {
				bgObject.x = (bgObject.maxWidth-(metricsW+2*bgObject.r)) / 2
			}
			ctx.beginPath()
			ctx.fillStyle = bgObject.color
	    if (bgObject.r) {
	    ctx.arc(bgObject.x + bgObject.r, bgObject.y + bgObject.r, bgObject.r, 0.5*Math.PI, 1.5*Math.PI)
	    ctx.arc(bgObject.x + metricsW + bgObject.r, bgObject.y + bgObject.r, bgObject.r, 1.5*Math.PI, 0.5*Math.PI)
	  	} else {
	  		ctx.fillRect(bgObject.x, bgObject.y, metricsW+2*bgObject.padding, bgObject.height)
	  	}
	    return bgObject.x + metricsW + 2*bgObject.padding
	  }
	}
}
module.exports = new canvasPocessor()