import { CommentCard } from '../CommentCard';
import { Stack } from '@mantine/core';
import { Comment } from 'types';
import { commentThreadStyles } from './CommentThread.styles';
import { CommentInput } from '../CommentInput/CommentInput';
import { useState } from 'react';

export function CommentThread(comment: Comment) {
    const { classes } = commentThreadStyles();
    const [replying, setReplying] = useState(false);
    const [activeReplyId, setActiveReplyId] = useState<string | undefined>(
        undefined
    );

    function createReplyForm(replyingToId: string) {
        console.log(replyingToId);
        setReplying(true);
        setActiveReplyId(replyingToId);
    }

    return (
        <Stack>
            <CommentCard comment={comment} createReplyForm={createReplyForm} />
            {comment.replies && (
                <Stack className={classes.subThread}>
                    {comment.replies.map((reply) => (
                        <CommentCard
                            comment={reply}
                            key={reply.id}
                            createReplyForm={createReplyForm}
                        />
                    ))}
                    {replying && <CommentInput replyingToId={activeReplyId} />}
                </Stack>
            )}
        </Stack>
    );
}
