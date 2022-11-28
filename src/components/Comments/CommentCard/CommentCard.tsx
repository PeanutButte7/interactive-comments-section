import {
    Avatar,
    Badge,
    Button,
    Group,
    Paper,
    Stack,
    Text,
    Textarea,
    UnstyledButton,
} from '@mantine/core';
import { IconCornerUpLeft, IconPencil, IconTrash } from '@tabler/icons';
import { commentCardStyles } from './CommentCard.styles';
import { Comment } from 'types';
import { LikeCounter } from 'components/Comments';
import { edit, remove, useAppDispatch, useAppSelector } from 'store';
import { useForm } from '@mantine/form';
import { useState } from 'react';

interface CommentCardProps {
    comment: Comment;
    createReplyForm: Function;
}

export function CommentCard({ comment, createReplyForm }: CommentCardProps) {
    const user = comment.user;
    const [isEditing, setEditing] = useState(false);
    const { classes } = commentCardStyles();
    const currentUser = useAppSelector((state) => state.currentUser).username;
    const isCurrentUser = currentUser === user.username;
    const dispatch = useAppDispatch();

    const form = useForm({
        initialValues: {
            comment: comment.content,
        },
    });

    function deleteComment() {
        dispatch(remove(comment.id));
    }

    function editComment() {
        setEditing(!isEditing);
    }

    function submitComment() {
        dispatch(
            edit({
                id: comment.id,
                content: form.values.comment,
            })
        );

        setEditing(false);
    }

    return (
        <Paper radius='md' shadow='sm' className={classes.commentCard}>
            <LikeCounter likes={comment.score} />
            <Stack spacing='sm' sx={{ flexGrow: 2 }}>
                <Group position='apart' align='center'>
                    <Group>
                        <Avatar
                            src={user.image}
                            alt={user.username}
                            radius='xl'
                        />
                        <Group align='baseline'>
                            <Text weight='bold'>{user.username}</Text>
                            {isCurrentUser && (
                                <Badge radius='sm' size='sm'>
                                    You
                                </Badge>
                            )}
                            <Text size='xs' color='dimmed'>
                                {comment.createdAt}
                            </Text>
                        </Group>
                    </Group>
                    {isCurrentUser ? (
                        <Group>
                            <UnstyledButton onClick={deleteComment}>
                                <Group
                                    spacing='sm'
                                    className={classes.replyButton}
                                >
                                    <IconTrash color='red' size='20px' />
                                    <Text color='red' size='sm'>
                                        Delete
                                    </Text>
                                </Group>
                            </UnstyledButton>
                            <UnstyledButton onClick={editComment}>
                                <Group
                                    spacing='sm'
                                    className={classes.replyButton}
                                >
                                    <IconPencil size='20px' />
                                    <Text size='sm'>Edit</Text>
                                </Group>
                            </UnstyledButton>
                        </Group>
                    ) : (
                        <UnstyledButton
                            onClick={() => createReplyForm(comment.id)}
                        >
                            <Group spacing='sm' className={classes.replyButton}>
                                <IconCornerUpLeft />
                                <Text size='sm'>Reply</Text>
                            </Group>
                        </UnstyledButton>
                    )}
                </Group>
                {!isEditing ? (
                    <Text size='sm'>
                        {comment.replyingTo && (
                            <Text component='span' color='brand' weight='bold'>
                                @{comment.replyingTo}{' '}
                            </Text>
                        )}
                        {comment.content}
                    </Text>
                ) : (
                    <form onSubmit={form.onSubmit(submitComment)}>
                        <Stack spacing='sm'>
                            <Textarea
                                sx={{ flexGrow: 2 }}
                                autosize
                                required
                                placeholder='Add a comment...'
                                {...form.getInputProps('comment')}
                            />
                            <Button
                                type='submit'
                                sx={{ alignSelf: 'flex-end' }}
                            >
                                Update
                            </Button>
                        </Stack>
                    </form>
                )}
            </Stack>
        </Paper>
    );
}
