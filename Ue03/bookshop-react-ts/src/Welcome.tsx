export function Welcome(props: WelcomeProps) {
    return (
        <h1>Hello {props.name}</h1>
    );
}

interface WelcomeProps {
    name: string;
}

export default Welcome;