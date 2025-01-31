import React from "react";

const CircularProgress = ({ value, name }: { value: number, name: string }) => {
    return (
        <div className="flex flex-col items-center">

            <h1 className="m-3">{name}</h1>
            <div
                className="radial-progress"
                style={{
                    '--value': value,
                    '--thickness': '0.27rem',
                } as React.CSSProperties}
            >
                {value}%
            </div>
        </div>
    )
}

export default CircularProgress;