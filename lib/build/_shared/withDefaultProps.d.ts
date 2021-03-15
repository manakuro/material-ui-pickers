import * as React from 'react';
export declare function useDefaultProps<T>(props: T, { name }: {
    name: string;
}): T;
export declare function withDefaultProps<T>(componentConfig: {
    name: string;
}, Component: React.ComponentType<T>): React.FC<T>;
