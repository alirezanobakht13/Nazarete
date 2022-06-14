import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faR, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ReactDOM } from "react";

export default function Nazarete(props?: any) {

    const [voteState, setVoteState] = useState(0);
    const [likeCount, setLikeCount] = useState(10);
    const [neutralCount, setNeutralCount] = useState(5);
    const [dislikeCount, setDislikeCount] = useState(34);

    const i1 = <i className="far fa-regular fa-thumbs-down text-red-500 text-3xl"></i>;
    const i2 = <h1>shit</h1>;


    return (
        <section className="w-4/5 lg:w-3/5 mx-auto my-2">
            <div className="w-full rounded-xl border flex flex-col">
                <div className="my-3 mx-6 ">
                    <h4 className="text-3xl font-normal leading-normal mt-0 mb-2">
                        Title of Nazarete
                    </h4>
                </div>
                <hr />
                <div className="my-2 mx-6">
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda quibusdam magni nemo porro laborum illo corporis quos ipsum cumque enim quaerat, dolor nostrum distinctio veniam tenetur mollitia esse fugit nulla! Quis ex ratione nulla sit? Sed impedit dolore, dolores a, asperiores commodi nam expedita autem, tempora harum aperiam accusantium eum aut itaque deserunt sapiente. Ipsum ut velit harum, autem, repudiandae sequi neque alias molestiae facilis, et odio sint fugiat! Consectetur provident voluptates ipsa quis laborum? Ratione sint culpa quisquam voluptate iste reprehenderit similique quae! Sed reprehenderit eveniet vel quod delectus eius libero tempora, non illo fugiat dicta odit nemo?<br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam simfilique, reiciendis autem accusamus nobis suscipit, illo ipsum voluptates saepe quidem distinctio est quod aperiam delectus facere consequatur sit ducimus soluta reprehenderit ullam perferendis tempore corporis voluptatum. Inventore quaerat tempora cum enim. Asperiores, vitae nulla accusamus explicabo consequuntur eligendi provident accusantium ipsam, repellendus illo ad omnis id consectetur? Sit magnam, sequi quasi inventore itaque quisquam pariatur odit natus? Blanditiis delectus suscipit magni ipsam consequuntur ad fugiat numquam cupiditate nihil perferendis! Quae culpa exercitationem maxime voluptatem labore enim aspernatur temporibus autem repellat voluptatum necessitatibus ducimus et quam impedit eaque voluptatibus, consequatur laboriosam molestiae minima sit cumque provident! Quis laudantium quod ea vitae maxime eaque magni aspernatur doloremque optio dolor. Quo sint delectus, atque quos nisi repellat alias a recusandae? Explicabo eligendi, nesciunt, iusto ab accusantium quia delectus eveniet cupiditate nobis eaque quisquam a tempore, amet nam repellendus in libero dolores maiores.<br />
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that's a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at
                    </p>
                </div>
                <div className="w-full flex">
                    <button className="w-1/3 pb-2 pt-5 justify-center items-center text-center text-3xl rounded-bl-xl hover:border-b-4 hover:border-red-500" onClick={() => { setVoteState(curr => { return curr === 1 ? 0 : 1 }) }}>
                        <i className={`fa-thumbs-down text-red-500 ${voteState === 1 ? "fa" : "far"}`}></i>
                        <p className="text-base font-light leading-relaxed mt-0 mb-4 text-red-800">{dislikeCount}</p>
                    </button>
                    <button className="w-1/3 pb-2 pt-5 justify-center items-center text-center text-3xl hover:border-b-4 hover:border-blue-500" onClick={() => { setVoteState(curr => { return curr === 2 ? 0 : 2 }) }}>
                        <i className={`fa-stop-circle text-blue-500 ${voteState === 2 ? "fa" : "far"}`}></i>
                        <p className="text-base font-light leading-relaxed mt-0 mb-4 text-blue-800">{neutralCount}</p>
                    </button>
                    <button className="w-1/3 pb-2 pt-5 justify-center items-center text-center text-3xl rounded-br-xl hover:border-b-4 hover:border-green-500" onClick={() => { setVoteState(curr => { return curr === 3 ? 0 : 3 }) }}>
                        <i className={`fa-thumbs-up text-green-500 ${voteState === 3 ? "fa" : "far"}`}></i>
                        <p className="text-base font-light leading-relaxed mt-0 mb-4 text-green-800">{likeCount}</p>
                    </button>
                </div>
            </div>
        </section>
    )
}