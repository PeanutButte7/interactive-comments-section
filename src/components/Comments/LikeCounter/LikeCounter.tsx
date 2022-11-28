import {
    createStyles,
    NumberInput,
    NumberInputHandlers,
    ActionIcon,
    Text,
    Stack,
} from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons';
import { useCounter } from '@mantine/hooks';
import { likeCounterStyles } from './LikeCounter.styles';

interface LikeCounterProps {
    likes: number;
}

export function LikeCounter({ likes }: LikeCounterProps) {
    const { classes } = likeCounterStyles();
    const [value, handlers] = useCounter(likes, { min: -99, max: 99 });

    return (
        <Stack align='center' className={classes.likeCard}>
            <ActionIcon<'button'>
                color='brand.3'
                variant='transparent'
                onClick={() => handlers.increment()}
                onMouseDown={(event) => event.preventDefault()}
            >
                <IconPlus size={14} stroke={4} />
            </ActionIcon>
            <Text color='brand' weight='bold'>
                {value}
            </Text>
            <ActionIcon<'button'>
                color='brand.3'
                variant='transparent'
                onClick={() => handlers.decrement()}
                onMouseDown={(event) => event.preventDefault()}
            >
                <IconMinus size={14} stroke={4} />
            </ActionIcon>
        </Stack>
    );
}
