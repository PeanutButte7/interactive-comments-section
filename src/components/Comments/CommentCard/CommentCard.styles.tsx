import { createStyles } from '@mantine/core';

export const commentCardStyles = createStyles((theme) => ({
    commentCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: theme.spacing.xl,
        gap: theme.spacing.xl,
    },
    replyButton: {
        color: theme.colors.brand,
    },
}));
