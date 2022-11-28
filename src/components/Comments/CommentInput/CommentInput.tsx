import { Avatar, Button, Paper, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { add, useAppDispatch, useAppSelector } from 'store';
import { commentInputStyles } from './CommentInput.styles';

interface CommentInputProps {
    replyingToId?: string;
}

export function CommentInput({ replyingToId }: CommentInputProps) {
    const dispatch = useAppDispatch();
    const { classes } = commentInputStyles();
    const user = useAppSelector((state) => state.currentUser);

    const form = useForm({
        initialValues: {
            comment: '',
        },
    });

    function submitComment() {
        console.log(replyingToId);
        dispatch(
            add({ content: form.values.comment, replyingToId: replyingToId })
        );
    }

    return (
        <Paper radius='md' shadow='sm' className={classes.inputCard}>
            <form
                onSubmit={form.onSubmit(submitComment)}
                className={classes.input}
            >
                <Avatar src={user.image} alt={user.username} radius='xl' />
                <Textarea
                    sx={{ flexGrow: 2 }}
                    autosize
                    required
                    placeholder='Add a comment...'
                    {...form.getInputProps('comment')}
                />
                <Button type='submit'>Submit</Button>
            </form>
        </Paper>
    );
}
