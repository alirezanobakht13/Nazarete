import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faR, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import useAuth from "../hooks/useAuth";

export default function Nazarete(props?: any) {

    const [voteState, setVoteState] = useState(0);
    const [likeCount, setLikeCount] = useState(10);
    const [neutralCount, setNeutralCount] = useState(5);
    const [dislikeCount, setDislikeCount] = useState(34);

    const [comment, setComment] = useState("")

    const [commentList, setCommentList] = useState([])

    const { auth }: any = useAuth()

    const url = process.env.REACT_APP_BACKEND_URL
    const backend = axios.create({ baseURL: url });
    const config = {
        headers: {
            Authorization: 'Bearer ' + auth.access_token,
        }
    }

    const getComments = () => {
        backend.get(`post/${props.nazarete_id}/comments/`, config)
            .then((res) => {
                console.log(res);
                setCommentList(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getVotes = () => {
        backend.get('post/' + props.nazarete_id, config)
            .then((res: any) => {
                console.log(res);
                setLikeCount(res.data.pos || 0);
                setNeutralCount(res.data.nat || 0);
                setDislikeCount(res.data.neg || 0)
                if (res.data.MyVote === "NULL") {
                    setVoteState(0);
                }
                else if (res.data.MyVote === "NEG") {
                    setVoteState(1);
                }
                else if (res.data.MyVote === "NAT") {
                    setVoteState(2);
                }
                else if (res.data.MyVote === "POS") {
                    setVoteState(3);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getComments();
        getVotes();
    }, [])

    const i1 = <i className="far fa-regular fa-thumbs-down text-red-500 text-3xl"></i>;
    const i2 = <h1>shit</h1>;

    const handleCommentClick = () => {
        console.log(comment)
        const data = {
            'post': props.nazarete_id,
            'text': comment
        }
        backend.post('/post/comment/', data, config)
            .then((res) => {
                console.log(res);
                setComment("")
                setTimeout(getComments, 300);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleVoteClick = (vote: string) => {
        if (voteState === 0) {
            const data = {
                "post": props.nazarete_id,
                "vote": vote
            }

            backend.post('/post/vote/', data, config)
                .then((res) => {
                    console.log(res);
                    setTimeout(getVotes, 300);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }


    return (
        <section className="w-4/5 lg:w-2/6 mx-auto my-4">
            <div className="w-full rounded-xl border flex flex-col">
                <div className="my-3 mx-6 flex align-middle justify-between items-center">
                    <h4 className="text-3xl font-normal leading-normal mt-0 mb-1">
                        {props?.nazarete_title ? props.nazarete_title : "???"}
                    </h4>
                    <div className="leading-relaxed font-thin">
                        2/13/2022
                    </div>
                </div>
                <hr />
                <div className="my-2 mx-6">
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 whitespace-pre">
                        {props?.nazarete_desc ? props.nazarete_desc : "???"}
                    </p>
                </div>
                <div className="w-full flex">
                    <button className="w-1/3 pb-2 pt-5 justify-center items-center text-center text-xl border-b-4 hover:border-red-500 border-transparent"
                        onClick={() => { handleVoteClick("NEG") }}>
                        <i className={`fa-thumbs-down text-red-500 ${voteState === 1 ? "fa" : "far"}`}></i>
                        <p className="text-sm font-light leading-relaxed mt-0 mb-1 text-red-800">{dislikeCount}</p>
                    </button>
                    <button className="w-1/3 pb-2 pt-5 justify-center items-center text-center text-xl border-b-4 hover:border-blue-500 border-transparent"
                        onClick={() => { handleVoteClick("NAT") }}>
                        <i className={`fa-stop-circle text-blue-500 ${voteState === 2 ? "fa" : "far"}`}></i>
                        <p className="text-sm font-light leading-relaxed mt-0 mb-1 text-blue-800">{neutralCount}</p>
                    </button>
                    <button className="w-1/3 pb-2 pt-5 justify-center items-center text-center text-xl border-b-4 hover:border-green-500 border-transparent"
                        onClick={() => { handleVoteClick("POS") }}>
                        <i className={`fa-thumbs-up text-green-500 ${voteState === 3 ? "fa" : "far"}`}></i>
                        <p className="text-sm font-light leading-relaxed mt-0 mb-1 text-green-800">{likeCount}</p>
                    </button>
                </div>
                <hr />
                <div className="mx-6 my-2">
                    <div className="flex justify-between">
                        <input value={comment} type={"text"} placeholder="Add comment ..." className="w-full border-b-2 hover:border-b-2 p-1 outline-none mr-3"
                            onChange={(e) => {
                                setComment(e.target.value);
                            }} />
                        <button onClick={handleCommentClick}>
                            <i className="fa fa-arrow-right text-sm" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="mt-1">
                        {commentList.map((com: any, i) => {
                            return (
                                <div className="flex justify-between items-center">
                                    <div className="leading-relaxed font-light text-sm pr-2" >
                                        <span className="font-semibold">{com.user.username} </span>
                                        {com.text}
                                    </div>
                                    <div className="leading-relaxed font-thin text-xs">
                                        {(new Date(com.createdAt)).toLocaleDateString()}
                                    </div>
                                </div>
                            )
                        })}
                        {/* <div className="flex justify-between items-center">
                            <div className="leading-relaxed font-light text-sm pr-2" >
                                <span className="font-semibold">Username </span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti qui ipsum quo.
                            </div>
                            <div className="leading-relaxed font-thin text-xs">
                                2/13/2022
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}