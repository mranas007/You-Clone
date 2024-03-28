const asyncHandler = (asyncHandler) => {
    (req, res, next) => {
        Promise.resolve(asyncHandler(req, res, next)).catch((err) => next(err))
    }
}


// const asyncHandler = () => {}
// const asyncHandler = (fn) => () => {}

// const asyncHandler = (fn) => async () => {
//     try {
//         fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             massege: "somthing went wrong"
//         })
//     }
// }
// export { asyncHandler }