import { createStyles } from '@mantine/core';

export const likeCounterStyles = createStyles((theme) => ({
    likeCard: {
        backgroundColor: theme.colors.brand[0],
        borderRadius: theme.radius.md,
        padding: '5px',
        gap: '5px',
    },
}));
