import React from "react";

import useFetch from "../../public/hooks/useFetch";
import House from "../components/House";
import SimpleSidebar from '../components/aside/index'

export default function App() {
    const { data, setData } = useFetch();
    return (
        <SimpleSidebar>
            <main>
                <input
                    type="text"
                    placeholder="Type your favorite house"
                    value={data.slug}
                    onChange={(e) => setData({ ...data, slug: e.target.value })}
                />
                <br />
                {data.results.length > 0 ? <House family={data.results[0]} /> : null}
            </main>
        </SimpleSidebar>
    );
}