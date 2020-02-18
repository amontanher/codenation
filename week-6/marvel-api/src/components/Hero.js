import React from 'react';

export default function Hero({hero}) {
    const img = hero.thumbnail.path + '.' + hero.thumbnail.extension;
    return (
        <div>
            <div>
                <img src={img} alt="Hero" width={50} height={50}></img>
            </div>
            <div>
                <p>{hero.name}</p>
            </div>
        </div>
    )
}