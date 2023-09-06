let guest = 0;
function Cup() {
    guest++;
    console.log(guest)
    return <h2>#{guest}</h2>;
}
export default function TeaSet() {
    return (
        <>
            <Cup />
            <Cup />
            <Cup />
        </>
    );
}