const HEAD = (
    <>
        <div className="gallow-rope" />
        <div className="head" />
    </>
)
const BODY = (
    < div className="body" />
)
const LEFT_ARM = (
    <>
        <div className="left-arm" />
    </>)
const RIGHT_ARM = (
    <>
        <div className="right-arm" />
    </>)
const RIGHT_LEG = (
    <>
        <div className="right-leg" />
    </>
)
const LEFT_LEG = (
    <>
        <div className="left-leg" />
    </>
)
type HangManDrawingProps = {
    numberOfGuesses: number
}
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

export function HangmanDrawing({ numberOfGuesses }: HangManDrawingProps) {


    return (
        <div className="hangman-container">
            {BODY_PARTS.slice(0,numberOfGuesses)}
            <div className="gallow-base" />
            <div className="gallow-vertical" />
            <div className="gallow-top" />
        </div>
    );
}
