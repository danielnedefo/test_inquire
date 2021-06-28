import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch,shallowEqual, useSelector  } from "react-redux";
import postOperations from '../../../redux/posts/operations'
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import commentOperations from '../../../redux/comments/operations'
import commentSelector from '../../../redux/comments/selector'
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
const PostPageElement = ({post,deletePost,updatePost,toggleModalForComments}) =>{
 const comments = useSelector(commentSelector,shallowEqual)
 const actualForThisPost = comments.filter(({postId}) => postId === post.id)
 const trueComments = new Map()
 for (let i = 0;i <actualForThisPost.length;i++){
  if(trueComments.has(actualForThisPost[i].id)){
         continue;
       }else{
        trueComments.set(actualForThisPost[i].id,(actualForThisPost[i].body))
      }
}
       
const render = () =>{
  for(let comments of trueComments.values()){
    return <p>{comments}</p>
  }
}
 const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const getComments = () =>{
      setOpen(!open)
      dispatch(commentOperations.getCommentsFromOnePost(post.id))
    }
    return (
        <React.Fragment>
          <TableRow>
            <TableCell>
              <IconButton aria-label="expand row" size="small" onClick={() => getComments()}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell align="right">{post.id}</TableCell>
            <TableCell align="right">{post.title}</TableCell>
            <TableCell>
            <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={()=>deletePost(post.id)}
        startIcon={<DeleteIcon />}>
            Delete
      </Button>
      <Button
        onClick={()=>updatePost(post.id)}
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Update
      </Button>
            <Button
              onClick={()=>toggleModalForComments(post.id)}
              variant="contained" color="primary">
        Left Comment
      </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                {trueComments && render()}
                {/* <Box margin={1}>
                  <Typography variant="h6" gutterBottom component="div">
                    History
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Total price ($)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {row.history.map((historyRow) => (
                        <TableRow key={historyRow.date}>
                          <TableCell component="th" scope="row">
                            {historyRow.date}
                          </TableCell>
                          <TableCell>{historyRow.customerId}</TableCell>
                          <TableCell align="right">{historyRow.amount}</TableCell>
                          <TableCell align="right">
                            {Math.round(historyRow.amount * row.price * 100) / 100}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box> */}
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      );
}
export default PostPageElement