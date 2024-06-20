import React from "react";
//import SongBox from "../SongBox/SongBox";

const Body = ({songs}) => {
    return (
        <div className="p-8">
            <h2 className="text-2xl mb-4">
                Available Songs
            </h2>
            <ul>
                {songs.map((song, index) => (
                    <li key={index} className="mb-2">
                        {song.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Body;