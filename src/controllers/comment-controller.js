import CommentService from "../services/comment-service.js";
const commentService=new CommentService();

export const createComment=async(req,res)=>{
    try{
        const response =await commentService.create(req.query.modelId,req.query.modelType,req.user.id,req.body.content);
        
        return res.status(201).json({
            success: true,
            message: 'Succesfully created a new comment',
            data: response,
            err: {}
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        })
    }
}