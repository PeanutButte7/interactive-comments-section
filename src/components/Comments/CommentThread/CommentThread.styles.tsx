import { createStyles } from '@mantine/core';

export const commentThreadStyles = createStyles((theme) => ({
    subThread: {
        marginLeft: 30,
        paddingLeft: 30,
        borderLeft: '2px solid',
        borderColor: theme.colors.brand[1],
    },
}));
