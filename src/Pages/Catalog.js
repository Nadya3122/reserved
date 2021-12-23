import React, {useEffect, useRef, useState} from 'react';
import Filter from "../components/Filter/Filter";
import Header from "../components/Headers/Header";
import Service from "../API/Service";
import {usePost} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import RestList from "../components/RestList";


const Catalog = () => {

        const [posts, setPosts] = useState([]);
        const [filter, setFilter] = useState({sort: '', query: ''});
        const [modal, setModal] = useState(false);
        const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);
        const lastElement = useRef();

        const [fetchPosts, postError] = useFetching(async () => {
                const response = await Service.getAll();
                setPosts([...posts, ...response]);
                console.log(posts);
        })

        useEffect(() => {
                fetchPosts();
        }, [])


        return (
            <div>
                    <Header/>
                    <Filter filter={filter} setFilter={setFilter}/>
                    <RestList posts={sortedAndSearchedPosts}/>
            </div>
        );
};

export default Catalog;