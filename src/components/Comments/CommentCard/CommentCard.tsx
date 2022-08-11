import {UnstyledButton, Avatar, Group, Paper, Text, Stack, Badge} from '@mantine/core';
import {IconTrash, IconCornerUpLeft} from '@tabler/icons';
import { commentCardStyles } from './CommentCard.styles';
import {Comment} from 'types';
import { LikeCounter } from 'components/Comments';
import {remove, useAppDispatch, useAppSelector} from 'store';

export function CommentCard(comment: Comment) {
    const user = comment.user;
    const { classes } = commentCardStyles();
    const currentUser = useAppSelector(state => state.currentUser).username;
    const isCurrentUser = currentUser === user.username;
    const dispatch = useAppDispatch();


    function deleteComment() {
        dispatch(remove(comment.id))
    }

    return (
        <Paper radius="md" shadow="sm" className={classes.commentCard}>
            <LikeCounter likes={comment.score}/>
            <Stack spacing="sm" sx={{flexGrow: 2}}>
                <Group position="apart" align="center">
                    <Group>
                        <Avatar src={user.image} alt={user.username} radius="xl"/>
                        <Group align="baseline">
                            <Text weight="bold">{user.username}</Text>
                            {isCurrentUser && <Badge radius='sm' size='sm'>You</Badge>}
                            <Text size="xs" color="dimmed">
                                { comment.createdAt }
                            </Text>
                        </Group>
                    </Group>
                    {isCurrentUser
                        ?
                        <Group>
                            <UnstyledButton onClick={deleteComment}>
                                <Group spacing='sm' className={classes.replyButton}>
                                    <IconTrash color='red'/>
                                    <Text color='red' size='sm'>Delete</Text>
                                </Group>
                            </UnstyledButton>
                        </Group>
                        : <UnstyledButton>
                            <Group spacing='sm' className={classes.replyButton}>
                                <IconCornerUpLeft/>
                                <Text size='sm'>Reply</Text>
                            </Group>
                        </UnstyledButton>
                    }
                </Group>
                <Text size="sm" sx={{display: 'flex'}}>
                    {comment.replyingTo && <Text component='span' color='brand' weight='bold'>@{comment.replyingTo} </Text>}
                    {comment.content}
                </Text>
            </Stack>
        </Paper>
    );
}