import { Express } from "express";
import { cPost, dPost, getPost } from "../controller/postcon.js";
const router=express.router()

router.post('/', cPost)
router.get('/:id', getPost)
router.put('/:id', uPost)
router.delete('/:delete', dPost)

export default router