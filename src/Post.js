import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import fetchApi from "./action";
const Post = () => {
    const dispatch = useDispatch();
    const postdata = useSelector((state) => state)
    useEffect(() => {
        dispatch(fetchApi())
    }, [])
    return (
        <>
                    <table className="table table-striped table-hover  mt-4">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {postdata.slice(0,20).map((val) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{val.id}</td>
                                            <td>{val.title}</td>
                                            <td>{val.body}</td>

                                        </tr>
                                    </>
                                )

                            })}

                        </tbody>
                    </table>
            
        </>
    )
}
export default Post