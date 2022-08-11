import { Container } from "@mantine/core";
import {ReactNode} from 'react';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <Container size='sm'>
            <main>{children}</main>
        </Container>
    )
}