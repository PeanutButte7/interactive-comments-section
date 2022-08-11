import { CommentThread} from 'components/Comments';
import {Stack, Title} from '@mantine/core';
import {useAppSelector} from 'store';
import {CommentInput} from '../../components/Comments/CommentInput/CommentInput';

export default function HomePage(){
    const comments = useAppSelector(state => state.comments).comments;

    return (
        <>
            <h1>Home Page</h1>
            <Stack>
                {comments.map((comment, index) =>
                    <CommentThread {...comment} key={index}/>
                )}
                <CommentInput/>
            </Stack>
        </>
    );
}