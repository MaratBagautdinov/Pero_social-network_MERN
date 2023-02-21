import multer from 'multer'

const storage = multer.diskStorage({
	destination: (_, __, cb) => cb(null, '../front/public/users'),
	filename: (req, file, cb) => cb(null,  Math.trunc(Date.now() / 1000) + file.originalname)
})
export default multer({ storage })
