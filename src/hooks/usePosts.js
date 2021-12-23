import {useMemo} from "react";

export const useSortedPosts = (posts, sort) =>{
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        } else {
            return posts;
        }
    }, [sort, posts]);
}

export  const usePost = (posts, sort, query)=>{
    const sortedPosts = useSortedPosts(posts, sort);
    return useMemo(() => {
        return sortedPosts.filter(post => post.name.toLowerCase().includes(query));
    }, [query, sortedPosts]);
}

