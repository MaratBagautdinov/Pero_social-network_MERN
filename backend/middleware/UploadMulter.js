import multer from 'multer'

const storage = multer.diskStorage({
	destination: (_, __, cb) => cb(null, './front/public/users'),
	filename: (_, file, cb) => cb(null, file.originalname)
})
export default multer({ storage })
