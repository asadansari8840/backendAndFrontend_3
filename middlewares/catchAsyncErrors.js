const catchAsyncErrors = (asyncFunc) => (req,res,next)=>{
    return Promise.resolve(asyncFunc(req,res,next)).catch(next);
}


export default catchAsyncErrors ;