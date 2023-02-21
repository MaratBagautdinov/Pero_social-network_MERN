import multer from 'multer'
import fs from 'fs'

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const path = 'uploads'
		!fs.existsSync(path) && fs.mkdirSync(path)
		cb(null, path)
	},
	filename: (req, file, cb) => cb(null, Math.trunc(Date.now() / 1000) + file.originalname)
})
export default multer({ storage })
