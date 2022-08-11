import {CommentCard} from '../CommentCard';
import {Stack, Text} from '@mantine/core';
import {Comment} from 'types';
import {commentThreadStyles} from './CommentThread.styles';

export function CommentThread(comment: Comment) {
    const {classes} = commentThreadStyles();

    return (
        <Stack>
            <CommentCard {...comment}/>
            {comment.replies &&
                <Stack className={classes.subThread}>
                    {comment.replies.map((reply) =>
                        <CommentCard {...reply} key={reply.id}/>
                    )}
                </Stack>
            }
        </Stack>
    )
}