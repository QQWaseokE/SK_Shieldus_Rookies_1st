function Lamp({ size, color }) {
    return (
        <div style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: color }} />
    );
}

function TrafficLight({ size }) {
    return (
        <>
            <div style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: 'red' }} />
            <div style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: 'green' }} />
            < div style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: 'yellow' }} />
        </>
    );
}
export default TrafficLight;