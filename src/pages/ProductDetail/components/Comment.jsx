import { Avatar, Box, Typography, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Style from "../../../style/components/Comment.module.scss";

const renderCommentItem = (props) => {
    return (
        <Box className={Style.commentsItem}>
            <Box className={Style.info}>
                <Avatar src="" />
                <Box className={Style.infoLeft}>
                    <Typography component="h5">Jannie Schumm</Typography>
                    <Box className={Style.reviews}>
                        <Rating size="small" readOnly={true} name="ratingComment" value={5} />
                        <Typography className={Style.ratingNumber}>4.7</Typography>
                        <Typography className={Style.time}>8 months ago</Typography>
                    </Box>
                </Box>
            </Box>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</Typography>
        </Box>
    )
}

export default function Comment(props) {
    
    return (
        <>
            {renderCommentItem()}
            {renderCommentItem()}
            {renderCommentItem()}
            {renderCommentItem()}
            <Typography className={Style.headerWriteReview}>Write a Review for this product</Typography>
            <Box className={Style.formControl}>
                <Box className={Style.titleForm}>
                    <Typography component="h5">Your Rating</Typography>
                    <Typography component="strong" color="primary">*</Typography>
                </Box>
                <Rating name="ratingWriteReview" value={0} />
            </Box>
            <Box className={Style.formControl}>
                <Box className={Style.titleForm}>
                    <Typography component="h5">Your Review</Typography>
                    <Typography component="strong" color="primary">*</Typography>
                </Box>
                <textarea className={Style.areaReview} name="ariaReview" placeholder="Write a review here..." rows="6"></textarea>
            </Box>
            <Button variant="contained" disableElevation color="primary">Submit</Button>
        </>
    )
};
