import { createStyles } from '@mantine/core';

export const commentInputStyles = createStyles((theme) => ({
    inputCard: {
        padding: theme.spacing.xl,
        gap: theme.spacing.xl,
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        gap: theme.spacing.xl,
    }
}));