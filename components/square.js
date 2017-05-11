import ctx from '../../shared/render/ctx'
import drawStripedSquare from '../render/drawStripedSquare'
import drawSolidSquare from '../../shared/render/drawSolidSquare'

export default ({ origin, size, squareType }) => {
	if (squareType == "STRIPED_A") {
		drawStripedSquare({ origin, size, originColor: "WHITE", otherColor: "BLACK" })
	} else if (squareType == "STRIPED_B") {
		drawStripedSquare({ origin, size, originColor: "BLACK", otherColor: "WHITE" })
	} else {
		ctx.fillStyle = squareType;
		drawSolidSquare({ origin, size })
	}
}